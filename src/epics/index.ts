import { combineEpics } from "redux-observable"

import { addMemosEpic, fetchMemosEpic } from "./memo"
import { addSheetsEpic, fetchSheetsEpic } from "./sheet"

export const rootEpics = combineEpics(fetchMemosEpic, addMemosEpic, addSheetsEpic, fetchSheetsEpic)
