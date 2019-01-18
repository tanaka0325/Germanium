import { CLOSE_MODAL, OPEN_MODAL } from "../constants"

export const openModal = (message: string) => ({
  type: OPEN_MODAL as typeof OPEN_MODAL,
  payload: {
    message,
  },
})

export const closeModal = () => ({
  type: CLOSE_MODAL as typeof CLOSE_MODAL,
})
