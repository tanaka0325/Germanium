import nanoid = require("nanoid")

import { ADD_CHAT, FETCH_CHATS, RECEIVE_CHATS, REMOVE_CHAT } from '../constants'

export const addChat = (text: string) => {
  const now = new Date()
  return {
    type: ADD_CHAT as typeof ADD_CHAT,
    payload: {
      id: nanoid(),
      text,
      created_at: now,
      updasted_at: now,
    },
  }
}

export const removeChat = (id: number) => ({
  type: REMOVE_CHAT as typeof REMOVE_CHAT,
  payload: { id },
})

export const fetchChats = () => ({
  type: FETCH_CHATS as typeof FETCH_CHATS,
})

export const receiceChats = (chats: any) => ({
  type: RECEIVE_CHATS as typeof RECEIVE_CHATS,
  payload: {
    chats,
  },
})
