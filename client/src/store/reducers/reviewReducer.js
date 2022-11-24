function reviewReducer(state=[], action){
  if(action.type === "GET_REVIEW"){
    return action.payload;
  };
  return state;
};

export default reviewReducer;