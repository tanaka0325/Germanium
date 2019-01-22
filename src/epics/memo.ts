import { Epic, ofType } from "redux-observable"
import { of } from "rxjs"
import { ajax, AjaxError, AjaxResponse } from "rxjs/ajax"
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  mergeMap,
  switchMap,
  tap,
} from "rxjs/operators"

import {
  addedMemo,
  receiveMemo,
  receiveMemos,
  selectSheet,
  unselectSheet,
} from "../actions"
import { ADD_MEMO, EDIT_MEMO, FETCH_MEMOS, REMOVE_MEMO, SEARCH_MEMO } from "../constants"
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

export const editMemoEpic: Epic = action$ =>
  action$.pipe(
    ofType(EDIT_MEMO),
    switchMap(action => {
      return ajax
        .patch(`${API_URL}/${action.payload.memo.id}`, action.payload.memo, headers)
        .pipe(
          tap(res => console.log(res)),
          map(res => receiveMemo(res.response))
        )
    })
  )

export const searchMemoEpic: Epic = (action$, state$) =>
  action$.pipe(
    ofType(SEARCH_MEMO),
    map(action => action.payload.word),
    debounceTime(400),
    distinctUntilChanged(),
    switchMap(word => {
      const url = `${API_URL}/search?q=${word}`
      return ajax.getJSON(url).pipe(
        mergeMap((res: IMemo[]) => {
          const latestSheet = state$.value.sheet.list[state$.value.sheet.list.length - 1]
          const selectSheetAction =
            word.length === 0 ? () => selectSheet(latestSheet.id) : unselectSheet
          return [selectSheetAction(), receiveMemos(res)]
        })
      )
    })
  )
