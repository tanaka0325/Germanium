import { Epic, ofType } from "redux-observable"
import { ajax } from "rxjs/ajax"
import { map, mergeMap, switchMap } from "rxjs/operators"

import { receiveMemos, receiveSheet, receiveSheets } from "../actions"
import { ADD_SHEET, FETCH_SHEETS, SELECT_SHEET } from "../constants"

const API_URL = "http://localhost:8888/sheets"
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
}

export const fetchSheetsEpic: Epic = action$ =>
  action$.pipe(
    ofType(FETCH_SHEETS),
    switchMap(() => ajax.getJSON(API_URL, headers).pipe(map(res => receiveSheets(res))))
  )

export const addSheetsEpic: Epic = action$ =>
  action$.pipe(
    ofType(ADD_SHEET),
    switchMap(() =>
      ajax.post(API_URL, "", headers).pipe(
        mergeMap((res: any) => {
          if (res.response.msg === "today's record already exists!") {
            return [{ type: "none" }]
          } else {
            return [receiveSheet(res.response), receiveMemos([])]
          }
        })
      )
    )
  )

export const selectSheetEpic: Epic = action$ =>
  action$.pipe(
    ofType(SELECT_SHEET),
    switchMap(action =>
      ajax
        .getJSON(`${API_URL}/${action.payload.id}`)
        .pipe(map((res: any) => receiveMemos(res.memos)))
    )
  )
