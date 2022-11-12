import {
  FILTER_CATEGORY,
  FILTER_USED,
} from './actions';

function filterReducer(state = [], action) {
  if (action.type === FILTER_CATEGORY) {
    return [];
  }

  if (action.type === FILTER_USED) {
    return [];
  }

  return state;
}

export default filterReducer;