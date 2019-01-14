import * as React from "react"

import { ISheet } from "../types"

interface ISheetListProps {
  sheets: ISheet[]
  selectSheet: (id: number) => void
}

export const SheetList = (props: ISheetListProps) => {
  const sheetItem = (sheet: ISheet) => {
    const handleOnClick = () => props.selectSheet(sheet.id)

    return (
      <p key={sheet.id} onClick={handleOnClick}>
        {sheet.title}
      </p>
    )
  }

  const sheetItems = props.sheets.map(sheet => sheetItem(sheet))
  return <div>{sheetItems}</div>
}
