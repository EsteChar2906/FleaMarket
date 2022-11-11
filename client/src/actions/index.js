import {
  LOAD_PRODUCTS,
} from './actions.js';

import products from '../testData';

// Dummy function. To connect with the back make the http request to the route.
export function loadProducts() {
  return {
    type: LOAD_PRODUCTS,
    payload: products,
  }
}