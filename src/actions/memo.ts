import { ulid } from "ulid"

import { ADD_MEMO, FETCH_MEMOS, RECEIVE_MEMOS, REMOVE_MEMO } from "../constants"

export const addMemo = (text: string) => {
  const now = new Date()
  return {
    type: ADD_MEMO as typeof ADD_MEMO,
    payload: {
      id: ulid(),
      text,
      created_at: now,
      updasted_at: now,
      sheet_id: "01D1628KV1G09XSW7HGQRN2ADZ",
    },
  }
}

export const removeMemo = (id: number) => ({
  type: REMOVE_MEMO as typeof REMOVE_MEMO,
  payload: { id },
})

export const fetchMemos = (sheetId?: number) => {
  const action = { type: FETCH_MEMOS as typeof FETCH_MEMOS }
  return sheetId ? Object.assign({}, action, { payload: { sheetId } }) : action
}

export const receiveMemos = (memos: any) => ({
  type: RECEIVE_MEMOS as typeof RECEIVE_MEMOS,
  payload: {
    memos,
  },
})
