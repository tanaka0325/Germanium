import * as React from "react"

export const Category = (props: any) => {
  const children = props.category.children.map((child: any) => {
    if (child.type === "child") {
      return (
        <CategoryChild
          key={child.name}
          child={child}
          selectedSheetId={props.selectedSheetId}
          selectSheet={props.selectSheet}
        />
      )
    } else {
      return (
        <Category
          key={child.name}
          category={child}
          selectedSheetId={props.selectedSheetId}
          selectSheet={props.selectSheet}
        />
      )
    }
  })
  return (
    <details>
      <summary>{props.category.name}</summary>
      {children}
    </details>
  )
}

export const CategoryChild = (props: any) => {
  const className =
    props.selectedSheetId === props.child.sheet.id ? "has-background-grey-lighter" : ""

  const handleOnClick = () => {
    props.selectSheet(props.child.sheet.id)
  }

  return (
    <p className={className} onClick={handleOnClick}>
      └{props.child.name}
    </p>
  )
}
