import { CREATE_PRODUCT, STOCK_UPDATE_PRODUCT } from './actionTypes';
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
    case STOCK_UPDATE_PRODUCT:
      switch (action.payload.updateType) {
        case 'increment':
          return state.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: +product.quantity + 1 }
              : { ...product }
          );
        case 'decrement':
          return state.map((product) =>
            product.id === action.payload.id
              ? {
                  ...product,
                  quantity: +product.quantity > 0 ? +product.quantity - 1 : 0,
                }
              : { ...product }
          );
        default:
          return state;
      }
    default:
      return state;
  }
};

export default productsReducer;
