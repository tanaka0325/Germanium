import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"

import configureStore from "./configureStore"
import { MemoContainer } from "./containers/MemoContainer"

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <MemoContainer />
  </Provider>,
  document.getElementById("app")
)
