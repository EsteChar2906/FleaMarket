import productsReducer from "./productsReducer";
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  products: productsReducer,
});

export default allReducers;