import * as React from "react"
import { connect } from "react-redux"

import { closeModal } from "../actions"
import { ModalBox } from "../components/ModalBox"

export class Modal extends React.Component<any, {}> {
  constructor(props) {
    super(props)
  }

  public render() {
    return <ModalBox modal={this.props.modal} closeModal={this.props.closeModal} />
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
})

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
})

export const ModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)
