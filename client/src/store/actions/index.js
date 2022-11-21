import axios from 'axios';

const host = "http://localhost:3001";

/*export function loadProducts() {
  return function (dispatch) {
    return fetch(`${host}/api/products`)
      .then((resp) => resp.json())
      .then((data) => {
        const productsToSend = data.map((p) => {
          const {
            _id,
            title,
            price,
            description,
            condition,
            category,
            rating,
            image,
            brand, ram, processor, battery, bluetooth
          } = p;
          return {
            id: _id,
            title,
            price,
            description,
            condition,
            category: category && category.name,
            rating: {
              rate: rating,
            },
            image, brand, ram, processor, battery, bluetooth
          };
        });
        dispatch({
          type: "LOAD_PRODUCTS",
          payload: productsToSend,
        });
      });
  };
}*/

export function loadProducts(){
  return async function(dispatch){
    const response = await axios.get(`${host}/api/products`)
    dispatch({
      type: "LOAD_PRODUCTS",
      payload: response.data
    })
  }
}

export function loadProduct(id) {
  return async function(dispatch){
    const response = await axios.get(`${host}/api/product/${id}`)
    dispatch({
    type: "LOAD_PRODUCT",
    payload: response.data
    })
  }
};

export function getProductName(name){
  return async function(dispatch){
      const response = await axios.get(`${host}/api/products?name=${name}`)
      dispatch({
        type: "GET_PRODUCT_NAME",
        payload: response.data 
      })
    }
};

export function filterCategory(category) {
  return async function(dispatch){
    const response = await axios.get(`${host}/api/products?category=${category}`)
    dispatch({
      type: "FILTER_CATEGORY",
      payload: response.data 
    })
  };
}

export function resetFiltered() {
  return {
    type: "RESET_FILTERED",
  };
}

export function sortByPrice(sort){
  return async function(dispatch){
    const response = await axios.get(`${host}/api/products?sort=${sort}`);
    dispatch({
      type: "SORT_PRICE",
      payload: response.data
    })
  }
}

export function filterUsed(condition) {
  return async function(dispatch){
    const response = await axios.get(`${host}/api/products?condition=${condition}`)
    dispatch({
      type: "FILTER_CONDITION",
      payload: response.data 
    })
  };
}

export function loadCategories() {
  return function (dispatch) {
    return fetch(`${host}/api/category`)
      .then((resp) => resp.json())
      .then((data) => {
        dispatch({
          type: "LOAD_CATEGORIES",
          payload: data,
        });
      });
  };
}

export const postFormPay = (payload) => {
  return async function(){
    try {
      const json = await axios.post('http://localhost:3001/api/payment',payload);
      return json
    } catch (e) {
      console.log(e);
    }
  }
}

export function shopingCar(opt, data) {
  return function (dispatch) {
    dispatch({
      type: opt,
      payload: data
    })
  }
};