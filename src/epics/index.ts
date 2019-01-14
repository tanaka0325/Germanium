import { combineEpics } from "redux-observable"

import { addMemosEpic, fetchMemosEpic } from "./memo"
import { addSheetsEpic, fetchSheetsEpic, selectSheetEpic } from "./sheet"

export const rootEpics = combineEpics(
  fetchMemosEpic,
  addMemosEpic,
  addSheetsEpic,
  fetchSheetsEpic,
  selectSheetEpic
)
