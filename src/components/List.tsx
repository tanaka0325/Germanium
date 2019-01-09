import * as React from "react"

import { IChat } from "../types"
import { formatYMDHm } from "../utils/date"

interface IListProps {
  chats: IChat[]
}

export const List = (props: IListProps) => {
  const chatList = props.chats.map(chat => {
    const d = new Date(chat.created_at)
    return (
      <li key={`chat-${chat.id}`}>
        {chat.text}({formatYMDHm(d)})
      </li>
    )
  })

  return (
    <div>
      <p>List Component</p>
      <ul>{chatList}</ul>
    </div>
  )
}
