import * as React from "react"
import { connect } from "react-redux"

import { addSheet, fetchSheets } from "../actions"
import { SheetList } from "../components/SheetList"

export class Sheet extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }

  public componentDidMount() {
    this.props.fetchSheets()
  }

  public render() {
    return (
      <div className="sheet">
        <SheetList sheets={this.props.sheets} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sheets: state.sheets,
})

const mapDispatchToProps = dispatch => ({
  addSheet: text => dispatch(addSheet(text)),
  fetchSheets: () => dispatch(fetchSheets()),
})

export const SheetContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sheet)
