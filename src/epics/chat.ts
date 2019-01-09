import { Epic, ofType } from "redux-observable"
import { switchMap } from "rxjs/operators"

import { fetchChats, receiveChats } from "../actions"
import { ADD_CHAT, FETCH_CHATS } from "../constants"

const API_URL = "http://localhost:3000/chats"

export const fetchChatsEpic: Epic = action$ =>
  action$.pipe(
    ofType(FETCH_CHATS),
    switchMap(() => {
      return fetch(API_URL)
        .then(res => res.json())
        .then(res => receiveChats(res))
        .catch(console.error)
    })
  )

export const addChatsEpic: Epic = action$ =>
  action$.pipe(
    ofType(ADD_CHAT),
    switchMap(action => {
      const body = JSON.stringify(action.payload)
      const method = "POST"
      const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      }

      return fetch("http://localhost:3000/chats", { method, headers, body })
        .then(res => res.json())
        .then((res) => ({ type: "none" }))
        .catch(console.error)
    })
  )
