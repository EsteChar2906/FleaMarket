import {
  LOAD_PRODUCTS,
  LOAD_PRODUCT,
} from '../reducers/actions';

import {FILTER_CATEGORY} from '../reducers/actions';
import { FILTER_USED } from '../reducers/actions';

import products from '../testData';

// Dummy function. To connect with the back make the http request to the route.
export function loadProducts() {
  return {
    type: LOAD_PRODUCTS,
    payload: products,
  }
}

export function loadProduct(id, products) {
  return {
    type: LOAD_PRODUCT,
    payload: {
      id,
      products
    },
  }
}

export function filterCategory(payload){
  return{
    type: FILTER_CATEGORY,
    payload
  }
}

export function filterUsed(payload){
  return{
    type: FILTER_USED,
    payload 
  }
}