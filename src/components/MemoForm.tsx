import * as React from "react"

import { Textarea } from "./common/textarea"

interface IFormProps {
  addMemo: any
}
interface IFormState {
  value: string
}

export class MemoForm extends React.Component<IFormProps, IFormState> {
  public style = {
    justifyContent: "right",
  }
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
      this.addMemo()
    }
  }

  public addMemo = () => {
    if (this.state.value) {
      this.props.addMemo(this.state.value)
      this.setState({ value: "" })
    }
  }

  public render() {
    return (
      <div className="box">
        <div>
          <Textarea
            value={this.state.value}
            handleOnChange={this.handleOnChange}
            handleOnKeyDown={this.handleOnKeyDown}
          />
        </div>
        <div className="is-flex" style={this.style}>
          <a className="button is-primary" onClick={this.addMemo}>
            Post
          </a>
        </div>
      </div>
    )
  }
}
