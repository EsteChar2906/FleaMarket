import productsReducer from "./productsReducer";
import productReducer from "./productReducer";
import filterReducer from "./filterReducer";
import categoryReducer from "./categoryReducer";
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  products: productsReducer,
  product: productReducer,
  filtered: filterReducer,
  categories: categoryReducer,
});

export default allReducers;