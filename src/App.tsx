import * as React from "react"
import { connect } from "react-redux"

import { Form } from "./components/Form"
import { List } from "./components/List"

import { addChat, fetchChats } from "./actions"

export class App extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }

  public componentDidMount() {
    this.props.fetchChats()
  }

  public render() {
    return (
      <div>
        <p>App Component</p>
        <List chats={this.props.chats} />
        <Form addChat={this.props.addChat} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  chats: state,
})

const mapDispatchToProps = dispatch => ({
  addChat: text => dispatch(addChat(text)),
  fetchChats: () => dispatch(fetchChats()),
})

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
