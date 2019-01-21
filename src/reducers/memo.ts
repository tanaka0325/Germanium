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
import {
  ADD_MEMO,
  ADDED_MEMO,
  EDIT_MEMO,
  RECEIVE_MEMO,
  RECEIVE_MEMOS,
  REMOVE_MEMO,
  SEARCH_MEMO,
  TOGGLE_FAVORITE,
} from "../constants"
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
    case ADD_MEMO:
    case EDIT_MEMO:
      return state
    case ADDED_MEMO:
      return [...state, action.payload.memo]
    case REMOVE_MEMO:
      return state.filter((memo: IMemo) => memo.id !== action.payload.id)
    case RECEIVE_MEMO:
      return state.map((memo: IMemo) =>
        memo.id === action.payload.memo.id ? action.payload.memo : memo
      )
    case RECEIVE_MEMOS:
      return [...action.payload.memos]
    case SEARCH_MEMO:
      return state
    default:
      const _: never = action
      return state
  }
}
