import * as React from "react"

interface IProps {
  value: string
  handleOnChange?: any
  handleOnKeyDown?: any
  placeholder?: string
}

export const Input = (props: IProps) => {
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

  const placeholder = props.placeholder ? props.placeholder : ""

  return (
    <input
      type="text"
      className="input"
      placeholder={placeholder}
      value={props.value}
      onChange={handleOnChange}
      onKeyDown={handleOnKeyDown}
    />
  )
}
