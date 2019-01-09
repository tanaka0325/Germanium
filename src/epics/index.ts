import { combineEpics } from "redux-observable"
import { addItemsEpic, fetchItemsEpic } from "./item"

export const rootEpics = combineEpics(fetchItemsEpic, addItemsEpic)
