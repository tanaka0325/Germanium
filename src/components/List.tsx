import * as React from "react"

import { IChat } from "../types"

interface IListProps {
  chats: IChat[]
}

export const List = (props: IListProps) => {
  const chatList = props.chats.map(chat => {
    const d = new Date(chat.created_at).toLocaleDateString("ja-JP")
    return (
      <li key={`chat-${chat.id}`}>
        {chat.text}({d})
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
