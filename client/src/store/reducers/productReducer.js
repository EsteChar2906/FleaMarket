function productReducer(state = {}, action) {
  if (action.type === "LOAD_PRODUCT") {
    return action.payload
  }
  if (action.type === "void") {
    return {}
  }
  
  return state;
}

export default productReducer;