import productsReducer from "./productsReducer";
import productReducer from "./productReducer";
import filterReducer from "./filterReducer";
import categoryReducer from "./categoryReducer";
import shopingReducer from "./shopingReducer";
import subTotalReducer from "./subTotalReducer";

import {combineReducers} from 'redux';

const allReducers = combineReducers({
  products: productsReducer,
  product: productReducer,
  filtered: filterReducer,
  categories: categoryReducer,
  shoping: shopingReducer,
  subTotal: subTotalReducer
});

export default allReducers;
