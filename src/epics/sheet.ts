import { Epic, ofType } from "redux-observable"
import { ajax } from "rxjs/ajax"
import { mergeMap, switchMap } from "rxjs/operators"

import { receiveMemos, receiveSheet, receiveSheets } from "../actions"
import { ADD_SHEET, FETCH_SHEETS, SELECT_SHEET } from "../constants"

const API_URL = "http://localhost:8888/sheets"

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
      const method = "POST"
      const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
      return ajax
        .post(API_URL, "", headers)
        .pipe(mergeMap(res => [receiveSheet(res.response), receiveMemos([])]))
    })
  )

export const selectSheetEpic: Epic = action$ =>
  action$.pipe(
    ofType(SELECT_SHEET),
    switchMap(action => {
      return fetch(`${API_URL}/${action.payload.id}`)
        .then(res => res.json())
        .then(res => receiveMemos(res.memos))
        .catch(console.error)
    })
  )
