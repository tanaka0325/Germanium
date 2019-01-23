import { Reducer } from "redux"

import { closeModal, openModal } from "../actions"
import { ActionTypes } from "../constants"
import { IModal } from "../types"

type Action = ReturnType<typeof openModal> | ReturnType<typeof closeModal>

const initalState: IModal = {
  is_open: false,
  message: "",
}

export const modal: Reducer<IModal, Action> = (state = initalState, action) => {
  switch (action.type) {
    case ActionTypes.OPEN_MODAL:
      return Object.assign({}, state, { is_open: true, message: action.payload.message })
    case ActionTypes.CLOSE_MODAL:
      return Object.assign({}, state, { is_open: false })
    default:
      const _: never = action
      return state
  }
}
