import { Epic, ofType } from "redux-observable"
import { switchMap } from "rxjs/operators"

import { receiceItems} from '../actions'
import { ADD_ITEM, FETCH_ITEMS } from '../constants'
import { itemDataMapper } from "../db"

export const fetchItemsEpic: Epic = action$ =>
  action$.pipe(
    ofType(FETCH_ITEMS),
    switchMap(action => {
      return itemDataMapper.findItems().then(res => receiceItems(res))
    })
  )

export const addItemsEpic: Epic = action$ =>
  action$.pipe(
    ofType(ADD_ITEM),
    switchMap(action => {
      return itemDataMapper.addItem(action.payload).then(() => ({ type: "non" }))
    })
  )