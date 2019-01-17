import { Reducer } from "redux"

import { addSheet, fetchSheet, receiveSheet, receiveSheets, selectSheet } from "../actions"
import { ADD_SHEET, FETCH_SHEET, RECEIVE_SHEET, RECEIVE_SHEETS, SELECT_SHEET } from "../constants"
import { ISheet } from "../types"

type Action =
  | ReturnType<typeof addSheet>
  | ReturnType<typeof fetchSheet>
  | ReturnType<typeof receiveSheets>
  | ReturnType<typeof receiveSheet>
  | ReturnType<typeof selectSheet>

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
    case RECEIVE_SHEET:
      return Object.assign({}, state, {
        selectedId: action.payload.sheet.id,
        list: [...state.list],
      })
    case RECEIVE_SHEETS:
      return Object.assign({}, state, { list: [...action.payload.sheets] })
    case SELECT_SHEET:
      return Object.assign({}, state, { selectedId: action.payload.id })
    case FETCH_SHEET:
    case ADD_SHEET:
      return state
    default:
      const _: never = action
      return state
  }
}
