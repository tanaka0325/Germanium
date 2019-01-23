import { Reducer } from "redux"

import {
  addedMemo,
  addMemo,
  editMemo,
  receiveMemo,
  receiveMemos,
  removeMemo,
  searchMemo,
} from "../actions"
import { ActionTypes } from "../constants"
import { IMemo } from "../types"

type Action =
  | ReturnType<typeof addMemo>
  | ReturnType<typeof addedMemo>
  | ReturnType<typeof removeMemo>
  | ReturnType<typeof receiveMemos>
  | ReturnType<typeof editMemo>
  | ReturnType<typeof receiveMemo>
  | ReturnType<typeof searchMemo>

export const memos: Reducer<IMemo[], Action> = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.ADD_MEMO:
    case ActionTypes.EDIT_MEMO:
      return state
    case ActionTypes.ADDED_MEMO:
      return [...state, action.payload.memo]
    case ActionTypes.REMOVE_MEMO:
      return state.filter((memo: IMemo) => memo.id !== action.payload.id)
    case ActionTypes.RECEIVE_MEMO:
      return state.map((memo: IMemo) =>
        memo.id === action.payload.memo.id ? action.payload.memo : memo
      )
    case ActionTypes.RECEIVE_MEMOS:
      return [...action.payload.memos]
    case ActionTypes.SEARCH_MEMO:
      return state
    default:
      const _: never = action
      return state
  }
}
