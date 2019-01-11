import { combineEpics } from "redux-observable"
import { addMemosEpic, fetchMemosEpic } from "./memo"

export const rootEpics = combineEpics(fetchMemosEpic, addMemosEpic)
