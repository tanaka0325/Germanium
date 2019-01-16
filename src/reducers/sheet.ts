import { Reducer } from "redux"

import { addSheet, receiveSheet, receiveSheets, selectSheet } from "../actions"
import { ADD_SHEET, RECEIVE_SHEET, RECEIVE_SHEETS, SELECT_SHEET } from "../constants"
import { ISheet } from "../types"

type Action =
  | ReturnType<typeof addSheet>
  | ReturnType<typeof receiveSheets>
  | ReturnType<typeof receiveSheet>
  | ReturnType<typeof selectSheet>

export const sheets: Reducer<ISheet[], Action> = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SHEET:
      return [...state, action.payload.sheet]
    case RECEIVE_SHEETS:
      return [...state, ...action.payload.sheets]
    case ADD_SHEET:
    case SELECT_SHEET:
      return state
    default:
      const _: never = action
      return state
  }
}
