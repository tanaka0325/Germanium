import * as React from "react"

import { ISheet } from "../types"

interface ISheetListProps {
  sheets: ISheet[]
}

export const SheetList = (props: ISheetListProps) => {
  const sheetItem = props.sheets.map(sheet => <p key={sheet.id}>{sheet.title}</p>)
  return <div>{sheetItem}</div>
}
