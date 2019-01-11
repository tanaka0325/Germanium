import * as React from "react"

import { IMemo } from "../types"
import { formatYMDHms } from "../utils/date"

interface IMemoProps {
  memo: IMemo
}

export const MemoItem = (props: IMemoProps) => {
  const d = new Date(props.memo.created_at)
  const body = props.memo.text

  const style = {
    fontSize: "80%",
  }

  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          {body}
          <br />
          <span style={style}>{formatYMDHms(d)}</span>
        </div>
      </div>
    </div>
  )
}
