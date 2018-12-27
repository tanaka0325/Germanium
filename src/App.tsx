import * as React from "react"
import { connect } from "react-redux"

import { Form } from "./components/Form"
import { List } from "./components/List"

import { addItem } from "./modules/Item"

export const App = (props: any) => {
  return (
    <div>
      <p>App Component</p>
      <Form addItem={props.addItem} />
      <List items={props.items} />
    </div>
  )
}

const mapStateToProps = state => ({
  items: state,
})

const mapDispatchToProps = dispatch => ({
  addItem: text => dispatch(addItem(text)),
})

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
