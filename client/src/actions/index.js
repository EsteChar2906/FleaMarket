import products from '../testData';
import im from '../images/product.jpg';

import {
  LOAD_PRODUCTS,
  LOAD_PRODUCT,
  FILTER_CATEGORY,
  FILTER_USED,
  RESET_FILTERED,
  LOAD_CATEGORIES,
} from '../reducers/actions';
const host = 'http://localhost:3001';


// Dummy function. To connect with the back make the http request to the route.
export function loadProducts() {
  return function(dispatch) {
    return fetch(`${host}/api/products`)
      .then(resp => resp.json())
      .then(data => {
        const productsToSend = data.map(p => {
          const {
            _id,
            title,
            price,
            description,
            condition,
            category,
            rating,
          } = p;
          return {
            id: _id,
            title,
            price,
            description,
            condition,
            category: category && category.name,
            rating: {
              rate: rating
            },
            image: im
          }
        });
        dispatch({
          type: LOAD_PRODUCTS,
          payload: productsToSend
        })
      });
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

export function filterUsed(condition, products){
  return{
    type: FILTER_USED,
    payload: {
      condition,
      products
    }
  }
}

export function loadCategories() {
  return function(dispatch) {
    return fetch(`${host}/api/category`)
      .then(resp => resp.json())
      .then(data => {
        dispatch({
          type: LOAD_CATEGORIES,
          payload: data
        })
      });
  }
}