import { ADD_MEMO, ADDED_MEMO, FETCH_MEMOS, RECEIVE_MEMOS, REMOVE_MEMO } from "../constants"
import { IMemo } from "../types"

export const addMemo = (text: string) => {
  return {
    type: ADD_MEMO as typeof ADD_MEMO,
    payload: {
      text,
      sheet_id: "01D1A9FQPWNHTQ1AZMKREH3W5A",
    },
  }
}

export const addedMemo = (memo: IMemo) => ({
  type: ADDED_MEMO as typeof ADDED_MEMO,
  payload: { memo },
})

export const removeMemo = (id: number) => ({
  type: REMOVE_MEMO as typeof REMOVE_MEMO,
  payload: { id },
})

export const fetchMemos = (sheetId?: string) => {
  const action = { type: FETCH_MEMOS as typeof FETCH_MEMOS }
  return sheetId ? Object.assign({}, action, { payload: { sheetId } }) : action
}

export const receiveMemos = (memos: any) => ({
  type: RECEIVE_MEMOS as typeof RECEIVE_MEMOS,
  payload: {
    memos,
  },
})
