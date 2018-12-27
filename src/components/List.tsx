import * as React from "react"

interface Item {
  id: number
  name: string
}

interface IListProps {
  items: Item[]
}

export const List = (props: IListProps) => {
  const itemList = props.items.map(item => <li key={item.id}>{item.name}</li>)

  return (
    <div>
      <p>List Component</p>
      <ul>{itemList}</ul>
    </div>
  )
}
