import { combineEpics } from "redux-observable"
import { addChatsEpic, fetchChatsEpic } from "./chat"

export const rootEpics = combineEpics(fetchChatsEpic, addChatsEpic)
