import { Reducer } from "redux"

import { addItem, receiceItems, removeItem } from "../actions"
import { ADD_ITEM, RECEIVE_ITEMS, REMOVE_ITEM } from "../constants"
import { Item } from "../types"

type Action =
  | ReturnType<typeof addItem>
  | ReturnType<typeof removeItem>
  | ReturnType<typeof receiceItems>

export const items: Reducer<Item[], Action> = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
        },
      ]
    case REMOVE_ITEM:
      return state.filter(item => item.id !== action.payload.id)
    case RECEIVE_ITEMS:
      return [...state, ...action.payload.items]
    default:
      const _: never = action
      return state
  }
}
