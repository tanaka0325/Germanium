import { combineReducers } from "redux"

import { memos } from "./memo"
import { modal } from "./modal"
import { sheets } from "./sheet"
import { sheetState } from "./sheetState"

export const rootReducer = combineReducers({ memos, sheets, modal, sheetState })
