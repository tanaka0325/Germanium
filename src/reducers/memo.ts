import { Reducer } from "redux"

import {
  addedMemo,
  addMemo,
  receiveMemo,
  receiveMemos,
  removeMemo,
  toggleFavorite,
} from "../actions"
import {
  ADD_MEMO,
  ADDED_MEMO,
  RECEIVE_MEMO,
  RECEIVE_MEMOS,
  REMOVE_MEMO,
  TOGGLE_FAVORITE,
} from "../constants"
import { IMemo } from "../types"

type Action =
  | ReturnType<typeof addMemo>
  | ReturnType<typeof addedMemo>
  | ReturnType<typeof removeMemo>
  | ReturnType<typeof receiveMemos>
  | ReturnType<typeof toggleFavorite>
  | ReturnType<typeof receiveMemo>

export const memos: Reducer<IMemo[], Action> = (state = [], action) => {
  switch (action.type) {
    case ADD_MEMO:
    case TOGGLE_FAVORITE:
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
    default:
      const _: never = action
      return state
  }
}
