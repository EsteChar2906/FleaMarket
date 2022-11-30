import productReducer from "./productReducer";
import shopingReducer from "./shopingReducer";
import reviewReducer from "./reviewReducer";
import userReducer from "./usersReducer";
import productsReducer from "./productsReducer";
import orderReducer from "./orderReducer.js"
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  product: productReducer,
  products: productsReducer,
  shoping: shopingReducer,
  reviews: reviewReducer,
  users: userReducer,
  orders: orderReducer
});

export default allReducers;
