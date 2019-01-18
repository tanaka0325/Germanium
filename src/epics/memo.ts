import { Epic, ofType } from "redux-observable"
import { of } from "rxjs"
import { ajax, AjaxError, AjaxResponse } from "rxjs/ajax"
import { catchError, map, switchMap } from "rxjs/operators"

import { addedMemo, receiveMemo, receiveMemos } from "../actions"
import { ADD_MEMO, FETCH_MEMOS, REMOVE_MEMO, TOGGLE_FAVORITE } from "../constants"
import { IMemo } from "../types"

const API_URL = "http://localhost:8888/memos"
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
}

export const fetchMemosEpic: Epic = action$ =>
  action$.pipe(
    ofType(FETCH_MEMOS),
    switchMap(() => ajax.getJSON(API_URL).pipe(map((res: IMemo[]) => receiveMemos(res))))
  )

export const addMemosEpic: Epic = action$ =>
  action$.pipe(
    ofType(ADD_MEMO),
    switchMap(action => {
      const body = JSON.stringify(action.payload)

      return ajax.post(API_URL, body, headers).pipe(
        map((res: AjaxResponse) => addedMemo(res.response)),
        catchError((err: AjaxError) => {
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

export const removeMemoEpic: Epic = action$ =>
  action$.pipe(
    ofType(REMOVE_MEMO),
    switchMap(action => {
      return ajax
        .delete(`${API_URL}/${action.payload.id}`)
        .pipe(map(res => ({ type: "none" })))
    })
  )

export const toggleFavoriteEpic: Epic = action$ =>
  action$.pipe(
    ofType(TOGGLE_FAVORITE),
    switchMap(action => {
      const id = action.payload.id
      delete action.payload.id

      return ajax
        .patch(`${API_URL}/${id}`, action.payload, headers)
        .pipe(map(res => receiveMemo(res.response)))
    })
  )
