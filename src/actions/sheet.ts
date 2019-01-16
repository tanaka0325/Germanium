import { ADD_SHEET, FETCH_SHEETS, RECEIVE_SHEET, RECEIVE_SHEETS, SELECT_SHEET } from "../constants"

export const addSheet = () => ({
  type: ADD_SHEET as typeof ADD_SHEET,
})

export const fetchSheets = () => ({
  type: FETCH_SHEETS as typeof FETCH_SHEETS,
})

export const receiveSheets = (sheets: any) => ({
  type: RECEIVE_SHEETS as typeof RECEIVE_SHEETS,
  payload: {
    sheets,
  },
})

export const receiveSheet = (sheet: any) => ({
  type: RECEIVE_SHEET as typeof RECEIVE_SHEET,
  payload: {
    sheet,
  },
})

export const selectSheet = (id: number) => ({
  type: SELECT_SHEET as typeof SELECT_SHEET,
  payload: {
    id,
  },
})
