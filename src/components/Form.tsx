import * as React from "react"

import { Textarea } from "./common/textarea"

interface IFormProps {
  addMemo: any
}
interface IFormState {
  value: string
}

export class Form extends React.Component<IFormProps, IFormState> {
  constructor(props) {
    super(props)

    this.state = {
      value: "",
    }
  }

  public handleOnChange = (e: React.FormEvent) => {
    const el = e.target as HTMLInputElement
    this.setState({ value: el.value })
  }

  public handleOnKeyDown = (e: React.KeyboardEvent) => {
    // Cmd+Enter => send
    if (e.metaKey && e.key === "Enter") {
      e.preventDefault()
      this.props.addMemo(this.state.value)
      this.setState({ value: "" })
    }
  }

  public render() {
    return (
      <div>
        <Textarea
          value={this.state.value}
          handleOnChange={this.handleOnChange}
          handleOnKeyDown={this.handleOnKeyDown}
        />
      </div>
    )
  }
}
