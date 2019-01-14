import { ulid } from "ulid"

import { ADD_SHEET, FETCH_SHEETS, RECEIVE_SHEETS, SELECT_SHEET } from "../constants"

export const addSheet = (title: string) => {
  const now = new Date()
  return {
    type: ADD_SHEET as typeof ADD_SHEET,
    payload: {
      id: ulid(),
      title,
      created_at: now,
      updasted_at: now,
    },
  }
}

export const fetchSheets = () => ({
  type: FETCH_SHEETS as typeof FETCH_SHEETS,
})

export const receiveSheets = (sheets: any) => ({
  type: RECEIVE_SHEETS as typeof RECEIVE_SHEETS,
  payload: {
    sheets,
  },
})

export const selectSheet = (id: number) => ({
  type: SELECT_SHEET as typeof SELECT_SHEET,
  payload: {
    id,
  },
})
