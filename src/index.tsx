import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"

import configureStore from "./configureStore"
import { SheetContainer } from "./containers/SheetContainer"

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <SheetContainer />
  </Provider>,
  document.getElementById("app")
)
