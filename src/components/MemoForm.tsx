import * as React from "react"

import { Button } from "./common/Button"
import { Textarea } from "./common/Textarea"

interface IFormProps {
  addMemo: any
  selectedSheetId: string
  disabled: boolean
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
      this.props.addMemo(this.props.selectedSheetId, this.state.value)
      this.setState({ value: "" })
    }
  }

  public render() {
    const button = !this.props.disabled ? (
      <a className="button is-primary" onClick={this.addMemo}>
        Post
      </a>
    ) : (
      <span className="button is-static">Post</span>
    )
    return (
      <div className="box">
        <div>
          <Textarea
            value={this.state.value}
            handleOnChange={this.handleOnChange}
            handleOnKeyDown={this.handleOnKeyDown}
            disabled={this.props.disabled}
          />
        </div>
        <div className="is-flex" style={this.style}>
          <Button handleOnClick={this.addMemo} disabled={this.props.disabled}>
            <i className="icon ion-md-send" />
          </Button>
        </div>
      </div>
    )
  }
}
