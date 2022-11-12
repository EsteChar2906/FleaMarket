import productsReducer from "./productsReducer";
import productReducer from "./productReducer";
import filterReducer from "./filterReducer";
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  products: productsReducer,
  product: productReducer,
  filtered: filterReducer,
});

export default allReducers;