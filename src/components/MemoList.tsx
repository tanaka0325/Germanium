import * as React from "react"

import { IMemo } from "../types"
import { sortOption } from "../utils"
import { MemoItem } from "./MemoItem"

interface IMemoListProps {
  memos: IMemo[]
  removeMemo: any
  editMemo: any
}

export const MemoList = (props: IMemoListProps) => {
  const memos = props.memos.sort(sortOption("id", "desc"))
  const memoList = memos.map(m => (
    <MemoItem
      key={`memo-${m.id}`}
      memo={m}
      removeMemo={props.removeMemo}
      editMemo={props.editMemo}
    />
  ))
  return <div className="memolist">{memoList}</div>
}
