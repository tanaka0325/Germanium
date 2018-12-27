import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"

import { AppContainer } from "./App"
import configureStore from "./configureStore"

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("app")
)
