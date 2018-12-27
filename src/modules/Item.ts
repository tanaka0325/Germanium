import { Reducer } from "redux"

// Actions
const ADD_ITEM = "ADD_ITEM"
const REMOVE_ITEM = "REMOVE_ITEM"

// Action Creators
let nextId = 0
export const addItem = (text: string) => ({
  type: ADD_ITEM as typeof ADD_ITEM,
  payload: {
    id: nextId++,
    text,
  },
})

export const removeItem = (id: number) => ({
  type: REMOVE_ITEM as typeof REMOVE_ITEM,
  payload: { id },
})

// Reducer
interface Item {
  id: number
  text: string
}
type State = Item[]
type Action = ReturnType<typeof addItem> | ReturnType<typeof removeItem>
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
    default:
      const _: never = action
      return state
  }
}
