import { Reducer } from "redux"

import { addChat, receiceChats, removeChat } from "../actions"
import { ADD_CHAT, RECEIVE_CHATS, REMOVE_CHAT } from "../constants"
import { IChat } from "../types"

type Action =
  | ReturnType<typeof addChat>
  | ReturnType<typeof removeChat>
  | ReturnType<typeof receiceChats>

export const chats: Reducer<IChat[], Action> = (state = [], action) => {
  switch (action.type) {
    case ADD_CHAT:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
        },
      ]
    case REMOVE_CHAT:
      return state.filter(chat => chat.id !== action.payload.id)
    case RECEIVE_CHATS:
      return [...state, ...action.payload.chats]
    default:
      const _: never = action
      return state
  }
}
