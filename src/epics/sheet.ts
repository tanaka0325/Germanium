import { Epic, ofType } from "redux-observable"
import { ajax, AjaxResponse } from "rxjs/ajax"
import { filter, map, mergeMap, switchMap } from "rxjs/operators"

import {
  addedSheet,
  fetchSheet,
  receiveMemos,
  receiveSheet,
  receiveSheets,
  selectSheet,
} from "../actions"
import {
  ADD_SHEET,
  FETCH_SHEET,
  FETCH_SHEETS,
  RECEIVE_SHEETS,
  SELECT_SHEET,
} from "../constants"
import { ISheet } from "../types"

const API_URL = "http://localhost:8888/sheets"
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
}

export const fetchSheetEpic: Epic = action$ =>
  action$.pipe(
    ofType(FETCH_SHEET),
    switchMap(action =>
      ajax.getJSON(`${API_URL}/${action.payload.id}`, headers).pipe(
        mergeMap((res: ISheet) => {
          return [receiveSheet(res), receiveMemos(res.memos)]
        })
      )
    )
  )

export const fetchSheetsEpic: Epic = action$ =>
  action$.pipe(
    ofType(FETCH_SHEETS),
    switchMap(() =>
      ajax.getJSON(API_URL, headers).pipe(map((res: ISheet[]) => receiveSheets(res)))
    )
  )

export const addSheetsEpic: Epic = action$ =>
  action$.pipe(
    ofType(ADD_SHEET),
    switchMap(() =>
      ajax.post(API_URL, "", headers).pipe(
        mergeMap((res: AjaxResponse) => {
          if (res.response.msg === "today's record already exists!") {
            return [{ type: "none" }]
          } else {
            return [addedSheet(res.response), receiveMemos([])]
          }
        })
      )
    )
  )

export const selectSheetEpic: Epic = action$ =>
  action$.pipe(
    ofType(SELECT_SHEET),
    map(action => fetchSheet(action.payload.id))
  )

export const receiveSheetsEpic: Epic = (action$, state$) =>
  action$.pipe(
    ofType(RECEIVE_SHEETS),
    filter(() => state$.value.sheet.selectedId === ""),
    map(() => {
      const latestSheet = state$.value.sheet.list[state$.value.sheet.list.length - 1]
      return selectSheet(latestSheet.id)
    })
  )
