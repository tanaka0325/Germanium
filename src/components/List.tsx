import * as React from "react"

import { IMemo } from "../types"
import { formatYMDHms } from "../utils/date"

interface IListProps {
  memos: IMemo[]
}

export const List = (props: IListProps) => {
  const memoList = props.memos.map(memo => {
    const d = new Date(memo.created_at)
    return (
      <li key={`memo-${memo.id}`}>
        {memo.text}({formatYMDHms(d)})
      </li>
    )
  })

  return (
    <div>
      <ul>{memoList}</ul>
    </div>
  )
}
