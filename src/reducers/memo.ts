import { Reducer } from "redux"

import { addedMemo, addMemo, receiveMemos, removeMemo } from "../actions"
import { ADD_MEMO, ADDED_MEMO, RECEIVE_MEMOS, REMOVE_MEMO } from "../constants"
import { IMemo } from "../types"

type Action =
  | ReturnType<typeof addMemo>
  | ReturnType<typeof addedMemo>
  | ReturnType<typeof removeMemo>
  | ReturnType<typeof receiveMemos>

export const memos: Reducer<IMemo[], Action> = (state = [], action) => {
  switch (action.type) {
    case ADD_MEMO:
      return state
    case ADDED_MEMO:
      return [...state, action.payload.memo]
    case REMOVE_MEMO:
      return state.filter(memo => memo.id !== action.payload.id)
    case RECEIVE_MEMOS:
      return [...action.payload.memos]
    default:
      const _: never = action
      return state
  }
}
