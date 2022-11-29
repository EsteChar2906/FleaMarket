function productsReducer(state=[],action){
  if(action.type === "GET_PRODUCTS"){
    return action.payload;
  }
  return state;
};

export default productsReducer;