import nanoid = require("nanoid")

import { ADD_ITEM, FETCH_ITEMS, RECEIVE_ITEMS, REMOVE_ITEM } from '../constants'

export const addItem = (text: string) => {
  const now = new Date()
  return {
    type: ADD_ITEM as typeof ADD_ITEM,
    payload: {
      id: nanoid(),
      text,
      created_at: now,
      updasted_at: now,
    },
  }
}

export const removeItem = (id: number) => ({
  type: REMOVE_ITEM as typeof REMOVE_ITEM,
  payload: { id },
})

export const fetchItems = () => ({
  type: FETCH_ITEMS as typeof FETCH_ITEMS,
})

export const receiceItems = (items: any) => ({
  type: RECEIVE_ITEMS as typeof RECEIVE_ITEMS,
  payload: {
    items,
  },
})
