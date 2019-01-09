import * as React from "react"
import { connect } from "react-redux"

import { Form } from "./components/Form"
import { List } from "./components/List"

import { addItem, fetchItems } from "./actions"

export class App extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }

  public componentDidMount() {
    this.props.fetchItems()
  }

  public render() {
    return (
      <div>
        <p>App Component</p>
        <List items={this.props.items} />
        <Form addItem={this.props.addItem} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  items: state,
})

const mapDispatchToProps = dispatch => ({
  addItem: text => dispatch(addItem(text)),
  fetchItems: () => dispatch(fetchItems()),
})

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
