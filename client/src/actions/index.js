import {
  LOAD_PRODUCTS,
  LOAD_PRODUCT,
  FILTER_CATEGORY,
  FILTER_USED,
  RESET_FILTERED,
} from '../reducers/actions';

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

export function filterCategory(category, products){
  return{
    type: FILTER_CATEGORY,
    payload: {
      category,
      products
    }
  }
}

export function resetFiltered() {
  return {
    type: RESET_FILTERED
  }
}

export function filterUsed(payload){
  return{
    type: FILTER_USED,
    payload 
  }
}