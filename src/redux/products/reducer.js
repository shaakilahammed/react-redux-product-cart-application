import { CREATE_PRODUCT } from './actionTypes';
import initialState from './initialState';
const nextProductId = (products) => {
  return (
    products.reduce((maxId, product) => Math.max(product.id, maxId), -1) + 1
  );
};
const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      return [...state, { id: nextProductId(state), ...action.payload }];
    default:
      return state;
  }
};

export default productsReducer;
