import * as React from "react"
import { connect } from "react-redux"

import { Form } from "../components/Form"
import { List } from "../components/List"

import { addMemo, fetchMemos } from "../actions"

export class Memo extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }

  public componentDidMount() {
    this.props.fetchMemos()
  }

  public render() {
    return (
      <div>
        <Form addMemo={this.props.addMemo} />
        <List memos={this.props.memos} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  memos: state,
})

const mapDispatchToProps = dispatch => ({
  addMemo: text => dispatch(addMemo(text)),
  fetchMemos: () => dispatch(fetchMemos()),
})

export const MemoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Memo)
