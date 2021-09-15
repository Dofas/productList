import {
  // ADD_COMMENT,
  CREATE_PRODUCT_ITEM,
  FETCH_PRODUCTS,
  REMOVE_PRODUCTS,
  SORT_PRODUCTS,
  UPDATE_PRODUCT,
} from "../types";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PRODUCT_ITEM:
      return {
        ...state,
        products: [...state.products].concat(action.payload),
      };
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: [...state.products].concat(action.payload),
      };
    case REMOVE_PRODUCTS:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    case SORT_PRODUCTS:
      if (action.payload === "title") {
        return {
          ...state,
          products: [...state.products].sort((a, b) =>
            a[action.payload].localeCompare(b[action.payload])
          ),
        };
      } else {
        return {
          ...state,
          products: [...state.products].sort((a, b) =>
            (+a.rating[action.payload] - +b.rating[action.payload]).toString()
          ),
        };
      }
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: [...state.products].map((product) => {
          if (+product.id === +action.payload.id) {
            product.title = action.payload.title;
            product.description = action.payload.descr;
            product.rating.count = action.payload.count;
            product.image = action.payload.image;
          }
          return product;
        }),
      };
      // case ADD_COMMENT:
      //   return {
      //     ...state,
      //     products: action.payload
      //   }
    default:
      return state;
  }
};
