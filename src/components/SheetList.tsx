import * as React from "react"

import { addSheet } from "../actions"
import { ISheet } from "../types"
import { formatYMD } from "../utils"

interface ISheetListProps {
  sheets: ISheet[]
  addSheet: () => any
  selectSheet: (id: number) => any
}

export const SheetList = (props: ISheetListProps) => {
  const sheetItem = (sheet: ISheet) => {
    const handleOnClick = () => props.selectSheet(sheet.id)
    const d = formatYMD(new Date(sheet.created_at))
    return (
      <p key={sheet.id} onClick={handleOnClick}>
        {d}
      </p>
    )
  }

  const sheetItems = props.sheets.map(sheet => sheetItem(sheet))
  return (
    <div>
      <p onClick={props.addSheet}>add sheet</p>
      {sheetItems}
    </div>
  )
}
