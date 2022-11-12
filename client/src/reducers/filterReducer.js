import {
  FILTER_CATEGORY,
  FILTER_USED,
  RESET_FILTERED,
} from './actions';

function filterReducer(state = [], action) {
  if (action.type === FILTER_CATEGORY) {
    const {category, products} = action.payload;
    return products.filter(p => p.category === category);
  }

  if (action.type === RESET_FILTERED) {
    return [];
  }

  if (action.type === FILTER_USED) {
    return [];
  }

  return state;
}

export default filterReducer;