import * as React from "react"

interface Item {
  id: number
  text: string
}

interface IListProps {
  items: Item[]
}

export const List = (props: IListProps) => {
  const itemList = props.items.map(item => <li key={`item-${item.id}`}>{item.text}</li>)

  return (
    <div>
      <p>List Component</p>
      <ul>{itemList}</ul>
    </div>
  )
}
