import { Reducer } from "redux"

import { addedSheet, receiveSheets } from "../actions"
import { ActionTypes } from "../constants"
import { ISheet } from "../types"

type Action = ReturnType<typeof addedSheet> | ReturnType<typeof receiveSheets>

export const sheets: Reducer<ISheet[], Action> = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.ADDED_SHEET:
      return [...state, action.payload.sheet]
    case ActionTypes.RECEIVE_SHEETS:
      return [...action.payload.sheets]
    default:
      const _: never = action
      return state
  }
}
