import {LOAD_PRODUCTS} from './actions';
// import {FILTER_CATEGORY} from './actions';
// import {FILTER_USED} from './actions';


function productsReducer(state = [], action) {
  if (action.type === LOAD_PRODUCTS) {
    return action.payload;
  }

  // if(action.type === FILTER_CATEGORY){
  //   const allProduct = state
  //   const filterProduct = action.payload === "All" ? allProduct: allProduct.filter(e => e.category.toLowerCase()=== action.payload);
  //   return{
  //     ...state,
  //     product: filterProduct,
  //     allProductos: allProduct
  //   }
  // }

  // if(action.type === FILTER_USED){
  //   const products = state.allProducts;
  //   const filterUsed = products.filter(e => e.estado.toLowerCase().include(action.payload.ToLowerCase())) ;
  //   return {
  //     ...state,
  //     product: filterUsed,
  //     allProdcutos: products
  //   }
  // }
  
  return state;
  
}

export default productsReducer;