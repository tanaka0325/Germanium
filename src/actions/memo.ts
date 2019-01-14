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
      sheet_id: 3,
    },
  }
}

export const removeMemo = (id: number) => ({
  type: REMOVE_MEMO as typeof REMOVE_MEMO,
  payload: { id },
})

export const fetchMemos = () => ({
  type: FETCH_MEMOS as typeof FETCH_MEMOS,
})

export const receiveMemos = (memos: any) => ({
  type: RECEIVE_MEMOS as typeof RECEIVE_MEMOS,
  payload: {
    memos,
  },
})
