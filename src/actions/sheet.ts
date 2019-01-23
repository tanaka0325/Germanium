import { ActionTypes } from "../constants"
import { ISheet } from "../types"

export const addSheet = () => ({
  type: ActionTypes.ADD_SHEET as typeof ActionTypes.ADD_SHEET,
})

export const addedSheet = (sheet: ISheet) => ({
  type: ActionTypes.ADDED_SHEET as typeof ActionTypes.ADDED_SHEET,
  payload: {
    sheet,
  },
})

export const fetchSheet = (id: string) => ({
  type: ActionTypes.FETCH_SHEET as typeof ActionTypes.FETCH_SHEET,
  payload: {
    id,
  },
})

export const fetchSheets = () => ({
  type: ActionTypes.FETCH_SHEETS as typeof ActionTypes.FETCH_SHEETS,
})

export const receiveSheets = (sheets: ISheet[]) => ({
  type: ActionTypes.RECEIVE_SHEETS as typeof ActionTypes.RECEIVE_SHEETS,
  payload: {
    sheets,
  },
})

export const receiveSheet = (sheet: ISheet) => ({
  type: ActionTypes.RECEIVE_SHEET as typeof ActionTypes.RECEIVE_SHEET,
  payload: {
    sheet,
  },
})

export const selectSheet = (id: string) => ({
  type: ActionTypes.SELECT_SHEET as typeof ActionTypes.SELECT_SHEET,
  payload: {
    id,
  },
})

export const unselectSheet = () => ({
  type: ActionTypes.UNSELECT_SHEET as typeof ActionTypes.UNSELECT_SHEET,
})
