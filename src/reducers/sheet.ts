import { Reducer } from "redux"

import { addSheet, receiveSheets, removeSheet } from "../actions"
import { ADD_SHEET, RECEIVE_SHEETS, REMOVE_SHEET } from "../constants"
import { ISheet } from "../types"

type Action =
  | ReturnType<typeof addSheet>
  | ReturnType<typeof removeSheet>
  | ReturnType<typeof receiveSheets>

export const sheets: Reducer<ISheet[], Action> = (state = [], action) => {
  switch (action.type) {
    case ADD_SHEET:
      return [...state, action.payload]
    case REMOVE_SHEET:
      return state.filter(sheet => sheet.id !== action.payload.id)
    case RECEIVE_SHEETS:
      return [...state, ...action.payload.sheets]
    default:
      const _: never = action
      return state
  }
}
