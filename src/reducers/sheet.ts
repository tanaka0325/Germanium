import { Reducer } from "redux"

import {
  addedSheet,
  addSheet,
  fetchSheet,
  receiveSheet,
  receiveSheets,
  selectSheet,
  unselectSheet,
} from "../actions"
import { ActionTypes } from "../constants"
import { ISheet } from "../types"

type Action =
  | ReturnType<typeof addSheet>
  | ReturnType<typeof addedSheet>
  | ReturnType<typeof fetchSheet>
  | ReturnType<typeof receiveSheets>
  | ReturnType<typeof receiveSheet>
  | ReturnType<typeof selectSheet>
  | ReturnType<typeof unselectSheet>

interface ISheetState {
  selectedId: string
  list: ISheet[]
}

const initialState = {
  selectedId: "",
  list: [],
}

export const sheet: Reducer<ISheetState, Action> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADDED_SHEET:
      return Object.assign({}, state, {
        selectedId: action.payload.sheet.id,
        list: [...state.list, action.payload.sheet],
      })
    case ActionTypes.RECEIVE_SHEET:
      return Object.assign({}, state, {
        selectedId: action.payload.sheet.id,
      })
    case ActionTypes.RECEIVE_SHEETS:
      return Object.assign({}, state, { list: [...action.payload.sheets] })
    case ActionTypes.SELECT_SHEET:
      return Object.assign({}, state, { selectedId: action.payload.id })
    case ActionTypes.UNSELECT_SHEET:
      return Object.assign({}, state, { selectedId: null })
    case ActionTypes.FETCH_SHEET:
    case ActionTypes.ADD_SHEET:
      return state
    default:
      const _: never = action
      return state
  }
}
