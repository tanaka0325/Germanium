import * as React from "react"

import { Form } from "./components/Form"
import { List } from "./components/List"

export const App = () => {
  const items = [{ id: 1, name: "aaaa" }, { id: 2, name: "bbbb" }, { id: 3, name: "cccc" }, { id: 4, name: "dddd" }]

  return (
    <div>
      <p>App Component</p>
      <Form />
      <List items={items} />
    </div>
  )
}
