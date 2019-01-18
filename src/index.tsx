import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"

import configureStore from "./configureStore"
import { ModalContainer } from "./containers/ModalContainer"
import { SheetContainer } from "./containers/SheetContainer"

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <SheetContainer />
    <ModalContainer />
  </Provider>,
  document.getElementById("app")
)
