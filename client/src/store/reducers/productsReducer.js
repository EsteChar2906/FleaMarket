function productsReducer(state = [], action) {
  if (action.type === "LOAD_PRODUCTS") {
    return action.payload;
  }
  if(action.type === "GET_PRODUCT_NAME"){
    return action.payload;
  }
  if(action.type === "FILTER_CATEGORY"){
    return action.payload;
  }
  if(action.type === "FILTER_CONDITION"){
    return action.payload;
  }
  if(action.type === "SORT_PRICE"){
    return action.payload
  }
  return state;
  
}

export default productsReducer;