import * as React from "react"

import { IMemo } from "../types"
import { MemoItem } from "./MemoItem"

interface IMemoListProps {
  memos: IMemo[]
}

export const MemoList = (props: IMemoListProps) => {
  const memoList = props.memos.map(m => <MemoItem key={`memo-${m.id}`} memo={m} />)
  return <ul>{memoList}</ul>
}
