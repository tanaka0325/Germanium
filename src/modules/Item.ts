import nanoid = require("nanoid")
import { Reducer } from "redux"
import { Epic, ofType } from "redux-observable"
import { mapTo, switchMap } from "rxjs/operators"

import { itemDataMapper } from "../db"

// Actions
const ADD_ITEM = "ADD_ITEM"
const REMOVE_ITEM = "REMOVE_ITEM"
const FETCH_ITEMS = "FETCH_ITEMS"
const RECEIVE_ITEMS = "RECEIVE_ITEMS"

// Action Creators
export const addItem = (text: string) => ({
  type: ADD_ITEM as typeof ADD_ITEM,
  payload: {
    id: nanoid(),
    text,
  },
})

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

// Reducer
interface Item {
  id: number
  text: string
}
type State = Item[]
type Action =
  | ReturnType<typeof addItem>
  | ReturnType<typeof removeItem>
  | ReturnType<typeof receiceItems>
const initialState = []
export const items: Reducer<State, Action> = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
        },
      ]
    case REMOVE_ITEM:
      return state.filter(item => item.id !== action.payload.id)
    case RECEIVE_ITEMS:
      console.log("receive item")
      return [...state, ...action.payload.items]
    default:
      const _: never = action
      return state
  }
}

// Epic
export const fetchItemsEpic: Epic = action$ =>
  action$.pipe(
    ofType(FETCH_ITEMS),
    switchMap(action => {
      return itemDataMapper.findItems().then(res => receiceItems(res))
    })
  )

export const addItemsEpic: Epic = action$ =>
  action$.pipe(
    ofType(ADD_ITEM),
    switchMap(action => {
      return itemDataMapper.addItem(action.payload).then(() => ({ type: "non" }))
    })
  )
