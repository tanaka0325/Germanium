import { Reducer } from "redux"

import { closeModal, openModal } from "../actions"
import { CLOSE_MODAL, OPEN_MODAL } from "../constants"
import { IModal } from "../types"

type Action = ReturnType<typeof openModal> | ReturnType<typeof closeModal>

const initalState: IModal = {
  is_open: false,
  message: "",
}

export const modal: Reducer<IModal, Action> = (state = initalState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return Object.assign({}, state, { is_open: true, message: action.payload.message })
    case CLOSE_MODAL:
      return Object.assign({}, state, { is_open: false })
    default:
      const _: never = action
      return state
  }
}
