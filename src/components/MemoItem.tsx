import * as React from "react"

import { IMemo } from "../types"
import { formatYMDHms } from "../utils/date"

interface IMemoProps {
  memo: IMemo
}

export const MemoItem = (props: IMemoProps) => {
  const d = new Date(props.memo.created_at)
  const style = {
    fontSize: "80%",
  }

  const re = /\n/gi
  const body = props.memo.text.replace(re, "<br />")
  const createMarkup = () => ({ __html: body })

  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <span dangerouslySetInnerHTML={createMarkup()} />
          <br />
          <span style={style}>{formatYMDHms(d)}</span>
        </div>
      </div>
    </div>
  )
}
