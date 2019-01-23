import * as React from "react"

export const Category = (props: any) => {
  const children = props.category.children.map((child: any) => {
    return child.type === "child" ? (
      <CategoryChild
        key={child.name}
        child={child}
        selectedSheet={props.selectedSheet}
        selectSheet={props.selectSheet}
      />
    ) : (
      <Category
        key={child.name}
        category={child}
        selectedSheet={props.selectedSheet}
        selectSheet={props.selectSheet}
      />
    )
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
    props.selectedSheet && props.selectedSheet.id === props.child.sheet.id
      ? "has-background-grey-lighter"
      : ""

  const handleOnClick = () => {
    props.selectSheet(props.child.sheet)
  }

  return (
    <p className={className} onClick={handleOnClick}>
      └{props.child.name}
    </p>
  )
}
