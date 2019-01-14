import { Reducer } from "redux"

import { addMemo, receiveMemos, removeMemo } from "../actions"
import { ADD_MEMO, RECEIVE_MEMOS, REMOVE_MEMO } from "../constants"
import { IMemo } from "../types"

type Action =
  | ReturnType<typeof addMemo>
  | ReturnType<typeof removeMemo>
  | ReturnType<typeof receiveMemos>

export const memos: Reducer<IMemo[], Action> = (state = [], action) => {
  switch (action.type) {
    case ADD_MEMO:
      return [...state, action.payload]
    case REMOVE_MEMO:
      return state.filter(memo => memo.id !== action.payload.id)
    case RECEIVE_MEMOS:
      // return [...state, ...action.payload.memos]
      return [...action.payload.memos]
    default:
      const _: never = action
      return state
  }
}
