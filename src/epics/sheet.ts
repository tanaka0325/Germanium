import { Epic, ofType } from "redux-observable"
import { of } from "rxjs"
import { ajax, AjaxError, AjaxResponse } from "rxjs/ajax"
import { catchError, filter, map, mergeMap, switchMap, tap } from "rxjs/operators"

import {
  addedSheet,
  fetchSheet,
  openModal,
  receiveMemos,
  receiveSheet,
  receiveSheets,
  selectSheet,
} from "../actions"
import { ActionTypes } from "../constants"
import { ISheet } from "../types"

const API_URL = "http://localhost:8888/sheets"
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
}

export const fetchSheetEpic: Epic = action$ =>
  action$.pipe(
    ofType(ActionTypes.FETCH_SHEET),
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
    ofType(ActionTypes.FETCH_SHEETS),
    switchMap(() =>
      ajax.getJSON(API_URL, headers).pipe(map((res: ISheet[]) => receiveSheets(res)))
    )
  )

export const addSheetsEpic: Epic = action$ =>
  action$.pipe(
    ofType(ActionTypes.ADD_SHEET),
    switchMap(() =>
      ajax.post(API_URL, "", headers).pipe(
        mergeMap((res: AjaxResponse) => [addedSheet(res.response), receiveMemos([])]),
        catchError((err: AjaxError) => of(openModal(err.response.error.message)))
      )
    )
  )

export const selectSheetEpic: Epic = action$ =>
  action$.pipe(
    ofType(ActionTypes.SELECT_SHEET),
    map(action => fetchSheet(action.payload.id))
  )

export const receiveSheetsEpic: Epic = (action$, state$) =>
  action$.pipe(
    ofType(ActionTypes.RECEIVE_SHEETS),
    filter(() => state$.value.sheetState.selectedSheetId === ""),
    map(() => {
      const latestSheetId = state$.value.sheets[state$.value.sheets.length - 1].id
      return selectSheet(latestSheetId)
    })
  )
