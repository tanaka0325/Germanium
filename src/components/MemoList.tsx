import * as React from "react"

import { IMemo } from "../types"
import { sortOption } from "../utils"
import { MemoItem } from "./MemoItem"

interface IMemoListProps {
  memos: IMemo[]
  removeMemo: any
  toggleFavorite: any
}

export const MemoList = (props: IMemoListProps) => {
  const memos = props.memos.sort(sortOption("id", "desc"))
  const memoList = memos.map(m => (
    <MemoItem
      key={`memo-${m.id}`}
      memo={m}
      removeMemo={props.removeMemo}
      toggleFavorite={props.toggleFavorite}
    />
  ))
  return <div className="memolist">{memoList}</div>
}
