let nextId = 0
export const addItem = text => ({
  type: "ADD_ITEM",
  payload: {
    id: nextId++,
    text,
  },
})
