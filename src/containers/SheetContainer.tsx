import * as React from "react"
import { connect } from "react-redux"

import {
  addMemo,
  addSheet,
  fetchSheet,
  fetchSheets,
  removeMemo,
  selectSheet,
  toggleFavorite,
} from "../actions"
import { MemoForm } from "../components/MemoForm"
import { MemoList } from "../components/MemoList"
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
    const formDisabled = !(latestSheet && latestSheet.id === this.props.selectedSheetId)
    return (
      <>
        <div className="sheet">
          <SheetList
            sheets={this.props.sheets}
            addSheet={this.props.addSheet}
            selectSheet={this.props.selectSheet}
            selectedSheetId={this.props.selectedSheetId}
          />
        </div>
        <div className="memo">
          <MemoForm
            addMemo={this.props.addMemo}
            selectedSheetId={this.props.selectedSheetId}
            disabled={formDisabled}
          />
          <MemoList
            memos={this.props.memos}
            removeMemo={this.props.removeMemo}
            toggleFavorite={this.props.toggleFavorite}
          />
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  selectedSheetId: state.sheet.selectedId,
  sheets: state.sheet.list,
  memos: state.memos,
})

const mapDispatchToProps = dispatch => ({
  addMemo: (sheetId, text) => dispatch(addMemo(sheetId, text)),
  removeMemo: memoId => dispatch(removeMemo(memoId)),
  addSheet: () => dispatch(addSheet()),
  fetchSheet: id => dispatch(fetchSheet(id)),
  fetchSheets: () => dispatch(fetchSheets()),
  selectSheet: id => dispatch(selectSheet(id)),
  toggleFavorite: (id, favorite) => dispatch(toggleFavorite(id, favorite)),
})

export const SheetContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sheet)
