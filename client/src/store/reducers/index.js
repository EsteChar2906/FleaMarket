import productsReducer from "./productsReducer";
import productReducer from "./productReducer";
import filterReducer from "./filterReducer";
import categoryReducer from "./categoryReducer";
import shopingReducer from "./shopingReducer";

import {combineReducers} from 'redux';

const allReducers = combineReducers({
  products: productsReducer,
  product: productReducer,
  filtered: filterReducer,
  categories: categoryReducer,
  shoping: shopingReducer
});

export default allReducers;
