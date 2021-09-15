import {
  // ADD_COMMENT,
  CREATE_PRODUCT_ITEM,
  FETCH_PRODUCTS,
  REMOVE_PRODUCTS,
  SORT_PRODUCTS,
  UPDATE_PRODUCT,
} from "../types";

export function createProductItem(item) {
  return {
    type: CREATE_PRODUCT_ITEM,
    payload: item,
  };
}

export function removeProductItem(id) {
  return {
    type: REMOVE_PRODUCTS,
    payload: id,
  };
}

export function fetchProducts() {
  return async (dispatch) => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    dispatch({ type: FETCH_PRODUCTS, payload: data });
  };
}

export function sortProducts(sort) {
  return {
    type: SORT_PRODUCTS,
    payload: sort,
  };
}

export function updateProduct(updatedProductItem) {
  return {
    type: UPDATE_PRODUCT,
    payload: updatedProductItem,
  };
}

// export function addCommentItem(info) {
//   return {
//     type: ADD_COMMENT,
//     payload: info
//   }
// }
