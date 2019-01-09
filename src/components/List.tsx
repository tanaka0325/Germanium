import * as React from "react"

interface Chat {
  id: number
  text: string
  created_at?: Date
}

interface IListProps {
  chats: Chat[]
}

export const List = (props: IListProps) => {
  const chatList = props.chats.map(chat => (
    <li key={`chat-${chat.id}`}>
      {chat.text}({chat.created_at ? chat.created_at.toLocaleString("ja-JP") : ""})
    </li>
  ))

  return (
    <div>
      <p>List Component</p>
      <ul>{chatList}</ul>
    </div>
  )
}
