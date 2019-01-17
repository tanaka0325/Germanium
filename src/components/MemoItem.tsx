import * as React from "react"

import { IMemo } from "../types"
import { formatYMDHms } from "../utils"

interface IMemoProps {
  memo: IMemo
  removeMemo: any
}

export const MemoItem = (props: IMemoProps) => {
  const d = new Date(props.memo.created_at)
  const style = {
    fontSize: "80%",
  }

  const re = /\n/gi
  let body = props.memo.text.replace(re, "<br/>")

  const re2 = / /gi
  body = body.replace(re2, "&nbsp;")

  const createMarkup = () => ({ __html: body })

  const removeMemo = () => {
    props.removeMemo(props.memo.id)
  }

  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <span dangerouslySetInnerHTML={createMarkup()} />
          <br />
          <span style={style}>{formatYMDHms(d)}</span>
          <span onClick={removeMemo}>
            <i className="icon ion-md-trash" />
          </span>
        </div>
      </div>
    </div>
  )
}
