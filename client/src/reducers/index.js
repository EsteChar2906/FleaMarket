import productsReducer from "./productsReducer";
import productReducer from "./productReducer";
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  products: productsReducer,
  product: productReducer,
});

export default allReducers;