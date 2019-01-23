import { Reducer } from "redux"

import {
  addedSheet,
  receiveSheet,
  receiveSheets,
  selectSheet,
  unselectSheet,
} from "../actions"
import { ActionTypes } from "../constants"
import { ISheet } from "../types"

type Action =
  | ReturnType<typeof addedSheet>
  | ReturnType<typeof receiveSheets>
  | ReturnType<typeof receiveSheet>
  | ReturnType<typeof selectSheet>
  | ReturnType<typeof unselectSheet>

interface ISheetState {
  selectedSheetId: string
}

const initialState = {
  selectedSheetId: "",
}

export const sheetState: Reducer<ISheetState, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionTypes.ADDED_SHEET:
      return Object.assign({}, state, {
        selectedSheetId: action.payload.sheet.id,
      })
    case ActionTypes.RECEIVE_SHEET:
      return Object.assign({}, state, {
        selectedSheetId: action.payload.sheet.id,
      })
    case ActionTypes.RECEIVE_SHEETS:
      return state
    case ActionTypes.SELECT_SHEET:
      return Object.assign({}, state, { selectedSheetId: action.payload.id })
    case ActionTypes.UNSELECT_SHEET:
      return Object.assign({}, state, { selectedSheetId: null })
    default:
      const _: never = action
      return state
  }
}
