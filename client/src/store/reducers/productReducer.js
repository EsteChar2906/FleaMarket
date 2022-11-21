function productReducer(state = {}, action) {
  if (action.type === "LOAD_PRODUCT") {
    return action.payload
  }

  return state;
}

export default productReducer;