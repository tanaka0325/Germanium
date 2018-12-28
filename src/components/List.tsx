import * as React from "react"

interface Item {
  id: number
  text: string
  created_at?: Date
}

interface IListProps {
  items: Item[]
}

export const List = (props: IListProps) => {
  const itemList = props.items.map(item => (
    <li key={`item-${item.id}`}>
      {item.text}({item.created_at ? item.created_at.toLocaleString("ja-JP") : ""})
    </li>
  ))

  return (
    <div>
      <p>List Component</p>
      <ul>{itemList}</ul>
    </div>
  )
}
