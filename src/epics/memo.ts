import { Epic, ofType } from "redux-observable"
import { catchError, map, switchMap } from "rxjs/operators"

import { of } from "rxjs"
import { ajax } from "rxjs/ajax"
import { addedMemo, receiveMemos } from "../actions"
import { ADD_MEMO, FETCH_MEMOS } from "../constants"

const API_URL = "http://localhost:8888/memos"
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
}

export const fetchMemosEpic: Epic = action$ =>
  action$.pipe(
    ofType(FETCH_MEMOS),
    switchMap(() => ajax.getJSON(API_URL).pipe(map(res => receiveMemos(res))))
  )

export const addMemosEpic: Epic = action$ =>
  action$.pipe(
    ofType(ADD_MEMO),
    switchMap(action => {
      const body = JSON.stringify(action.payload)
      const method = "POST"

      return ajax.post(API_URL, body, headers).pipe(
        map((res: any) => addedMemo(res.response)),
        catchError(err => {
          console.log(err)
          return of({
            type: "error",
            payload: err,
            error: true,
          })
        })
      )
    })
  )
