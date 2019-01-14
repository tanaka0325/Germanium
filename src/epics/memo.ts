import { Epic, ofType } from "redux-observable"
import { switchMap } from "rxjs/operators"

import { fetchMemos, receiveMemos } from "../actions"
import { ADD_MEMO, FETCH_MEMOS } from "../constants"

const API_URL = "http://localhost:3000/memos"

export const fetchMemosEpic: Epic = action$ =>
  action$.pipe(
    ofType(FETCH_MEMOS),
    switchMap(action => {
      const url =
        action.payload && action.payload.sheetId
          ? `${API_URL}?sheet_id=${action.payload.sheetId}`
          : API_URL
      return fetch(url)
        .then(res => res.json())
        .then(res => receiveMemos(res))
        .catch(console.error)
    })
  )

export const addMemosEpic: Epic = action$ =>
  action$.pipe(
    ofType(ADD_MEMO),
    switchMap(action => {
      const body = JSON.stringify(action.payload)
      const method = "POST"
      const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      }

      return fetch(API_URL, { method, headers, body })
        .then(res => res.json())
        .then(res => ({ type: "none" }))
        .catch(console.error)
    })
  )
