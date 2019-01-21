import * as React from "react"
import * as remark from "remark"
import * as breaks from "remark-breaks"
import * as remark2react from "remark-react"

import { IMemo } from "../types"
import { formatYMDHms } from "../utils"
import { Textarea } from "./common/Textarea"

interface IMemoItemProps {
  memo: IMemo
  removeMemo: any
  editMemo: any
}

interface IMemoItemState {
  text: string
  isEditing: boolean
}

export class MemoItem extends React.Component<IMemoItemProps, IMemoItemState> {
  constructor(props) {
    super(props)

    this.state = {
      text: this.props.memo.text,
      isEditing: false,
    }
  }

  public removeMemo = () => {
    this.props.removeMemo(this.props.memo.id)
  }

  public toggleFavorite = () => {
    const memo = Object.assign({}, this.props.memo, {
      favorite: !this.props.memo.favorite,
    })
    this.editMemo(memo)
  }

  public editMemo = (memo: IMemo) => {
    this.props.editMemo(memo)
  }

  public handleOnChange = (e: React.FormEvent) => {
    const el = e.target as HTMLInputElement
    this.setState({
      text: el.value,
    })
  }

  public handleOnKeyDown = (e: React.KeyboardEvent) => {
    // Cmd+Enter => send
    if (e.metaKey && e.key === "Enter") {
      e.preventDefault()
      const memo = Object.assign({}, this.props.memo, { text: this.state.text })
      this.editMemo(memo)
      this.setState({
        isEditing: false,
        text: "",
      })
    }
  }

  public toggleEditMode = () => {
    this.setState({ isEditing: !this.state.isEditing })
  }

  public render() {
    const d = new Date(this.props.memo.created_at)

    const text = remark()
      .use(breaks)
      .use(remark2react)
      .processSync(this.props.memo.text).contents

    const favoriteClassName = this.props.memo.favorite
      ? "icon ion-md-star"
      : "icon ion-md-star-outline"

    const textarea = (
      <Textarea
        value={this.state.text}
        handleOnChange={this.handleOnChange}
        handleOnKeyDown={this.handleOnKeyDown}
      />
    )

    const html = this.state.isEditing ? textarea : text

    return (
      <div className="card">
        <div className="card-content">
          <div className="content">
            {html}
            <span style={style}>{formatYMDHms(d)}</span>
            <span onClick={this.removeMemo}>
              <i className="icon ion-md-trash" />
            </span>
            <span onClick={this.toggleFavorite}>
              <i className={favoriteClassName} />
            </span>
            <span onClick={this.toggleEditMode}>
              <i className="icon ion-md-create" />
            </span>
          </div>
        </div>
      </div>
    )
  }
}

const style = {
  fontSize: "80%",
}
