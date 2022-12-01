function priceReducer(state = [],action){
  if(action.type === "GET_PRICE"){
    const allOrder = action.payload;
    const filetPrice = allOrder.map(e => e.price);
    return filetPrice;
  }
  return state;
};

export default priceReducer;