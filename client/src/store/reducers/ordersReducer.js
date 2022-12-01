function ordersReducer(state=[],action){
  if(action.type === "GET_ORDERS"){
    return action.payload;
  };
  return state;
};

export default ordersReducer;