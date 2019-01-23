import { ActionTypes } from "../constants"
import { IMemo } from "../types"

export const addMemo = (sheetId: string, text: string) => ({
  type: ActionTypes.ADD_MEMO as typeof ActionTypes.ADD_MEMO,
  payload: {
    text,
    sheet_id: sheetId,
  },
})

export const addedMemo = (memo: IMemo) => ({
  type: ActionTypes.ADDED_MEMO as typeof ActionTypes.ADDED_MEMO,
  payload: { memo },
})

export const removeMemo = (id: string) => ({
  type: ActionTypes.REMOVE_MEMO as typeof ActionTypes.REMOVE_MEMO,
  payload: { id },
})

export const fetchMemos = (sheetId?: string) => {
  const action = { type: ActionTypes.FETCH_MEMOS as typeof ActionTypes.FETCH_MEMOS }
  return sheetId ? Object.assign({}, action, { payload: { sheetId } }) : action
}

export const receiveMemo = (memo: IMemo) => ({
  type: ActionTypes.RECEIVE_MEMO as typeof ActionTypes.RECEIVE_MEMO,
  payload: { memo },
})

export const receiveMemos = (memos: IMemo[]) => ({
  type: ActionTypes.RECEIVE_MEMOS as typeof ActionTypes.RECEIVE_MEMOS,
  payload: {
    memos,
  },
})

export const editMemo = (memo: IMemo) => ({
  type: ActionTypes.EDIT_MEMO as typeof ActionTypes.EDIT_MEMO,
  payload: {
    memo,
  },
})

export const searchMemo = (word: string) => ({
  type: ActionTypes.SEARCH_MEMO as typeof ActionTypes.SEARCH_MEMO,
  payload: {
    word,
  },
})
