function categoryReducer(state = [], action) {
  if (action.type === "LOAD_CATEGORIES") {
    return action.payload.map(c => c.name);
  }

  return state;
}

export default categoryReducer;