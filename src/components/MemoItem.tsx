import * as React from "react"

import { IMemo } from "../types"
import { formatYMDHms } from "../utils/date"

interface IMemoProps {
  memo: IMemo
}

export const MemoItem = (props: IMemoProps) => {
  const d = new Date(props.memo.created_at)
  return (
    <li>
      {props.memo.text}({formatYMDHms(d)})
    </li>
  )
}
