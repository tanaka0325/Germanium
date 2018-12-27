import { applyMiddleware, compose, createStore as reduxCreateStore } from "redux"
import { createEpicMiddleware } from "redux-observable"

import { rootReducer } from "./modules"
// import { rootEpics } from "./modules"

// For redux-devtools
declare var window: any
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const epicMiddleware = createEpicMiddleware()

export default function createStore() {
  const store = reduxCreateStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)))
  // epicMiddleware.run(rootEpics)

  return store
}
