import productsReducer from "./productsReducer";
import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";
import shopingReducer from "./shopingReducer";
import reviewReducer from "./reviewReducer";
import userReducer from "./usersReducer";

import {combineReducers} from 'redux';

const allReducers = combineReducers({
  products: productsReducer,
  product: productReducer,
  categories: categoryReducer,
  shoping: shopingReducer,
  reviews: reviewReducer,
  users: userReducer
});

export default allReducers;
