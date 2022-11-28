import productReducer from "./productReducer";
import shopingReducer from "./shopingReducer";
import reviewReducer from "./reviewReducer";
import userReducer from "./usersReducer";

import {combineReducers} from 'redux';

const allReducers = combineReducers({
  product: productReducer,
  shoping: shopingReducer,
  reviews: reviewReducer,
  users: userReducer
});

export default allReducers;
