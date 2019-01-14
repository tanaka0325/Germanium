import { combineReducers } from "redux"

import { memos } from "./memo"
import { sheets } from "./sheet"

export const rootReducer = combineReducers({ memos, sheets })
