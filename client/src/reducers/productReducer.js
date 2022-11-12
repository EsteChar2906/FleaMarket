import { LOAD_PRODUCT } from "./actions";

function productReducer(state = {}, action) {
  if (action.type === LOAD_PRODUCT) {
    const {id, products} = action.payload;
    return products.find(p => p.id === id);
  }

  return state;
}

export default productReducer;