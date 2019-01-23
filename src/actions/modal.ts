import { ActionTypes } from "../constants"

export const openModal = (message: string) => ({
  type: ActionTypes.OPEN_MODAL as typeof ActionTypes.OPEN_MODAL,
  payload: {
    message,
  },
})

export const closeModal = () => ({
  type: ActionTypes.CLOSE_MODAL as typeof ActionTypes.CLOSE_MODAL,
})
