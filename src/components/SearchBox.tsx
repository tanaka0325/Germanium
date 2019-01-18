import * as React from "react"
import { Input } from "./common/Input"

interface IProps {
  searchMemo: any
}

export class SearchBox extends React.Component<IProps, any> {
  constructor(props) {
    super(props)

    this.state = {
      text: "",
    }
  }

  public handleOnChange = (e: any) => {
    this.setState({ text: e.target.value })
    this.props.searchMemo(e.target.value)
  }

  public render() {
    return (
      <div className="field">
        <div className="control has-icons-left has-icons-right">
          <Input
            value={this.state.text}
            placeholder="Search Word..."
            handleOnChange={this.handleOnChange}
          />

          <span className="icon is-left">
            <i className="icon ion-md-search" />
          </span>
        </div>
      </div>
    )
  }
}
