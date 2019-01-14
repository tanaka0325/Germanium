import { ulid } from "ulid"

import { ADD_SHEET, FETCH_SHEETS, RECEIVE_SHEETS, REMOVE_SHEET } from "../constants"

export const addSheet = (text: string) => {
  const now = new Date()
  return {
    type: ADD_SHEET as typeof ADD_SHEET,
    payload: {
      id: ulid(),
      text,
      created_at: now,
      updasted_at: now,
      sheet_id: 3,
    },
  }
}

export const removeSheet = (id: number) => ({
  type: REMOVE_SHEET as typeof REMOVE_SHEET,
  payload: { id },
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
