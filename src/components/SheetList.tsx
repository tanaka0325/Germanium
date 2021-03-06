import * as dayjs from "dayjs"
import * as React from "react"

import { ISheet } from "../types"
import { Category } from "./Category"
import { Button } from "./common/Button"

interface ISheetListProps {
  sheets: ISheet[]
  addSheet: () => any
  selectSheet: (sheet: ISheet) => any
  selectedSheet: ISheet
}

export const SheetList = (props: ISheetListProps) => {
  const formatedSheets = convertSheets(props.sheets)

  const sheetItems = formatedSheets.map(sheet => (
    <Category
      key={sheet.name}
      category={sheet}
      selectedSheet={props.selectedSheet}
      selectSheet={props.selectSheet}
    />
  ))

  return (
    <div>
      <Button classNames={["is-fullwidth"]} handleOnClick={props.addSheet}>
        <i className="icon ion-md-add" style={style} />
      </Button>
      {sheetItems}
    </div>
  )
}

function convertSheets(sheets: any) {
  const splitedSheets = []

  sheets.forEach((sheet: ISheet) => {
    const splitDates = dayjs(sheet.created_at)
      .format("YYYY/MM/DD")
      .split("/")

    let name = ""
    createReturnDate(splitedSheets, splitDates)

    function createReturnDate(results, dateStrings: string[]) {
      const checkDate = dateStrings.shift()
      name = name ? name + "/" + checkDate : checkDate
      let el = results.find(e => e.name === name)
      if (!el) {
        if (dateStrings.length === 0) {
          el = { type: "child", name, sheet }
          results.push(el)
          return results
        }
        el = { type: "category", name, children: [] }
        results.push(el)
      }

      return createReturnDate(el.children, dateStrings)
    }
  })
  return splitedSheets
}

const style = {
  fontSize: "1.5rem",
}
