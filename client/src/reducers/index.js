import productsReducer from "./productsReducer";
import {combineReducers} from 'redux';

const allReducers = combineReducers({
productsReducer,
});

export default allReducers;