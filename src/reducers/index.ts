import { combineReducers } from "redux"

import { memos } from "./memo"
import { modal } from "./modal"
import { sheet } from "./sheet"

export const rootReducer = combineReducers({ memos, sheet, modal })
