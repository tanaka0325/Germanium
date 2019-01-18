import * as React from "react"

import { IModal } from "../types"

interface IModalProps {
  modal: IModal
  closeModal: any
}

export const ModalBox = (props: IModalProps) => {
  const className = props.modal.is_open ? "modal is-active" : "modal"
  return (
    <div className={className}>
      <div className="modal-background" onClick={props.closeModal} />
      <div className="modal-content">
        <div className="box">
          <p>{props.modal.message}</p>
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={props.closeModal}
      />
    </div>
  )
}
