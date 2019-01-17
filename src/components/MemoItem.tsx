import * as React from "react"
import * as remark from "remark"
import * as breaks from "remark-breaks"
import * as remark2react from "remark-react"

import { IMemo } from "../types"
import { formatYMDHms } from "../utils"

interface IMemoProps {
  memo: IMemo
  removeMemo: any
}

export const MemoItem = (props: IMemoProps) => {
  const d = new Date(props.memo.created_at)

  const removeMemo = () => {
    props.removeMemo(props.memo.id)
  }

  const text = remark()
    .use(breaks)
    .use(remark2react)
    .processSync(props.memo.text).contents

  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          {text}
          <span style={style}>{formatYMDHms(d)}</span>
          <span onClick={removeMemo}>
            <i className="icon ion-md-trash" />
          </span>
        </div>
      </div>
    </div>
  )
}

const style = {
  fontSize: "80%",
}
