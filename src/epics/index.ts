import { combineEpics } from "redux-observable"

import * as MemoEpics from "./memo"
import * as SheetEpics from "./sheet"

const epicsObj = Object.assign({}, MemoEpics, SheetEpics)

let epics = []
epics = Object.values(epicsObj).map(epic => epic)

export const rootEpics = combineEpics(...epics)
