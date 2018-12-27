export const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
        },
      ]
    default:
      return state
  }
}
