import { combineReducers } from "redux"

import { memos } from "./memo"
import { sheet } from "./sheet"

export const rootReducer = combineReducers({ memos, sheet })
