import { Reducer } from "redux"

import { addSheet, receiveSheets, selectSheet } from "../actions"
import { ADD_SHEET, RECEIVE_SHEETS, SELECT_SHEET } from "../constants"
import { ISheet } from "../types"

type Action =
  | ReturnType<typeof addSheet>
  | ReturnType<typeof receiveSheets>
  | ReturnType<typeof selectSheet>

export const sheets: Reducer<ISheet[], Action> = (state = [], action) => {
  switch (action.type) {
    case ADD_SHEET:
      return [...state, action.payload]
    case RECEIVE_SHEETS:
      return [...state, ...action.payload.sheets]
    case SELECT_SHEET:
      return state
    default:
      const _: never = action
      return state
  }
}
