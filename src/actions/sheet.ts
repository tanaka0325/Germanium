import {
  ADD_SHEET,
  ADDED_SHEET,
  FETCH_SHEET,
  FETCH_SHEETS,
  RECEIVE_SHEET,
  RECEIVE_SHEETS,
  SELECT_SHEET,
} from "../constants"
import { ISheet } from "../types"

export const addSheet = () => ({
  type: ADD_SHEET as typeof ADD_SHEET,
})

export const addedSheet = (sheet: ISheet) => ({
  type: ADDED_SHEET as typeof ADDED_SHEET,
  payload: {
    sheet,
  },
})

export const fetchSheet = (id: string) => ({
  type: FETCH_SHEET as typeof FETCH_SHEET,
  payload: {
    id,
  },
})

export const fetchSheets = () => ({
  type: FETCH_SHEETS as typeof FETCH_SHEETS,
})

export const receiveSheets = (sheets: ISheet[]) => ({
  type: RECEIVE_SHEETS as typeof RECEIVE_SHEETS,
  payload: {
    sheets,
  },
})

export const receiveSheet = (sheet: ISheet) => ({
  type: RECEIVE_SHEET as typeof RECEIVE_SHEET,
  payload: {
    sheet,
  },
})

export const selectSheet = (id: string) => ({
  type: SELECT_SHEET as typeof SELECT_SHEET,
  payload: {
    id,
  },
})
