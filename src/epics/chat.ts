import { Epic, ofType } from "redux-observable"
import { switchMap } from "rxjs/operators"

import { receiceChats} from '../actions'
import { ADD_CHAT, FETCH_CHATS } from '../constants'
import { chatDataMapper } from "../db"

export const fetchChatsEpic: Epic = action$ =>
  action$.pipe(
    ofType(FETCH_CHATS),
    switchMap(action => {
      return chatDataMapper.findChats().then(res => receiceChats(res))
    })
  )

export const addChatsEpic: Epic = action$ =>
  action$.pipe(
    ofType(ADD_CHAT),
    switchMap(action => {
      return chatDataMapper.addChat(action.payload).then(() => ({ type: "non" }))
    })
  )