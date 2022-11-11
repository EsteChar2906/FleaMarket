import {LOAD_PRODUCTS} from './actions';

function productsReducer(state = [], action) {
  if (action.type === LOAD_PRODUCTS) {
    return {
    state: action.payload
    }
  }
  return state;
}

export default productsReducer;