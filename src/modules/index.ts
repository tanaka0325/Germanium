import { combineReducers } from "redux"
import { combineEpics } from "redux-observable"

import { fetchItemsEpic, items } from "./Item"

// export const rootReducer = combineReducers({ items })
export const rootReducer = items
export const rootEpics = combineEpics(fetchItemsEpic)
