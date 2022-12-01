import productReducer from "./productReducer";
import shopingReducer from "./shopingReducer";
import reviewReducer from "./reviewReducer";
import userReducer from "./usersReducer";
import productsReducer from "./productsReducer";
import {combineReducers} from 'redux';
import ordersReducer from "./ordersReducer";
import priceReducer from "./priceReducer";

const allReducers = combineReducers({
  product: productReducer,
  products: productsReducer,
  shoping: shopingReducer,
  reviews: reviewReducer,
  users: userReducer,
  orders: ordersReducer,
  prices: priceReducer,
});

export default allReducers;
