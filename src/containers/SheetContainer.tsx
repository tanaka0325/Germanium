import * as React from "react"
import { connect } from "react-redux"

import {
  addMemo,
  addSheet,
  editMemo,
  fetchSheets,
  removeMemo,
  searchMemo,
  selectSheet,
} from "../actions"

import { MemoForm } from "../components/MemoForm"
import { MemoList } from "../components/MemoList"
import { SearchBox } from "../components/SearchBox"
import { SheetList } from "../components/SheetList"

export class Sheet extends React.Component<any, {}> {
  constructor(props) {
    super(props)
  }

  public componentDidMount() {
    this.props.fetchSheets()
  }

  public render() {
    const latestSheet = this.props.sheets[this.props.sheets.length - 1]
    const selectedSheetId = this.props.selectedSheet ? this.props.selectedSheet.id : null
    const formDisabled = !(latestSheet && latestSheet.id === selectedSheetId)

    return (
      <>
        <div className="sheet">
          <SheetList
            sheets={this.props.sheets}
            addSheet={this.props.addSheet}
            selectSheet={this.props.selectSheet}
            selectedSheet={this.props.selectedSheet}
          />
        </div>
        <div className="memo">
          <SearchBox searchMemo={this.props.searchMemo} />
          <MemoForm
            addMemo={this.props.addMemo}
            selectedSheet={this.props.selectedSheet}
            disabled={formDisabled}
          />
          <MemoList
            memos={this.props.memos}
            removeMemo={this.props.removeMemo}
            editMemo={this.props.editMemo}
          />
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  selectedSheet: state.sheetState.selectedSheet,
  sheets: state.sheets,
  memos: state.memos,
})

const mapDispatchToProps = dispatch => ({
  addMemo: (sheetId, text) => dispatch(addMemo(sheetId, text)),
  removeMemo: memoId => dispatch(removeMemo(memoId)),
  addSheet: () => dispatch(addSheet()),
  fetchSheets: () => dispatch(fetchSheets()),
  selectSheet: sheet => dispatch(selectSheet(sheet)),
  editMemo: memo => dispatch(editMemo(memo)),
  searchMemo: word => dispatch(searchMemo(word)),
})

export const SheetContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sheet)
