import axios from 'axios';
import { BACK_DOMINIO } from "../../config.js";

const host = BACK_DOMINIO;

export function loadProduct(id) {
  return async function (dispatch) {
    if (id) {
      const response = await axios.get(`${host}/api/product/${id}`)
      dispatch({
        type: "LOAD_PRODUCT",
        payload: response.data
      })
    }else{
      dispatch({
        type: "void"
      })
    }

  }
};

export function getProducts(){
  return async function(dispatch){
    try {
      const products = await axios.get(`${host}/api/products`);
      return dispatch({type: "GET_PRODUCTS", payload: products.data})
    } catch (e) {
      console.log(e)
    }
  }
}

export const postFormPay = (payload) => {
  return async function () {
    try {
      const json = await axios.post(`${host}/api/orders`, payload);
      return json
    } catch (e) {
      console.log(e);
    }
  }
}

export const postReviews = (payload) => {
  return async function () {
    try {
      const json = await axios.post(`${host}/api/review`,payload);
      return json
    } catch (e) {
      console.log(e);
    }
  }
}

export const getReview = () => {
  return async function(dispatch){
    try {
      const json = await axios.get(`${host}/api/review`);
      return dispatch({type:"GET_REVIEW", payload: json.data});
    } catch (e) {
      console.log(e);
    }
  }
};

export const getUsers = () => {
  return async function(dispatch){
    try {
      const json = await axios.get(`${host}/api/usersData`);
      return dispatch({type:"GET_USER", payload: json.data});
    } catch (e) {
      console.log(e)
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
