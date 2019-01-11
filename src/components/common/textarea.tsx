import * as React from "react"

interface IProps {
  value: string
  handleOnChange?: any
  handleOnKeyDown?: any
}

export const Textarea = (props: IProps) => {
  const handleOnChange = (e: React.FormEvent) => {
    if (props.handleOnChange) {
      props.handleOnChange(e)
    }
  }

  const handleOnKeyDown = (e: React.KeyboardEvent) => {
    if (props.handleOnKeyDown) {
      props.handleOnKeyDown(e)
    }
  }

  return (
    <textarea
      className="textarea"
      value={props.value}
      onChange={handleOnChange}
      onKeyDown={handleOnKeyDown}
    />
  )
}
