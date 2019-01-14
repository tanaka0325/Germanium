import { Epic, ofType } from "redux-observable"
import { map, switchMap } from "rxjs/operators"

import { fetchMemos, receiveSheets } from "../actions"
import { ADD_SHEET, FETCH_SHEETS, SELECT_SHEET } from "../constants"

const API_URL = "http://localhost:3000/sheets"

export const fetchSheetsEpic: Epic = action$ =>
  action$.pipe(
    ofType(FETCH_SHEETS),
    switchMap(() => {
      return fetch(API_URL)
        .then(res => res.json())
        .then(res => receiveSheets(res))
        .catch(console.error)
    })
  )

export const addSheetsEpic: Epic = action$ =>
  action$.pipe(
    ofType(ADD_SHEET),
    switchMap(action => {
      const body = JSON.stringify(action.payload)
      const method = "POST"
      const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      }

      return fetch(API_URL, { method, headers, body })
        .then(res => res.json())
        .then(res => fetchMemos(res.id))
        .catch(console.error)
    })
  )

export const selectSheetEpic: Epic = action$ =>
  action$.pipe(
    ofType(SELECT_SHEET),
    map(action => fetchMemos(action.payload.id))
  )
