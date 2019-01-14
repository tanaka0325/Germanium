import * as React from "react"
import { connect } from "react-redux"

import { MemoForm } from "../components/MemoForm"
import { MemoList } from "../components/MemoList"

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
      <div className="memo">
        <MemoForm addMemo={this.props.addMemo} />
        <MemoList memos={this.props.memos} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  memos: state.memos,
})

const mapDispatchToProps = dispatch => ({
  addMemo: text => dispatch(addMemo(text)),
  fetchMemos: () => dispatch(fetchMemos()),
})

export const MemoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Memo)
