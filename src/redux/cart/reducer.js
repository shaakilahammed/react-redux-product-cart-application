import { ADD_TO_CART, DELETE_ITEM, REMOVE_FROM_CART } from './actionTypes';
import initialState from './initialState';

const isExist = (state, payload) =>
  state.some((item) => item.id === payload.id);

const cartReducer = (state = initialState, action) => {
  const copiedState = [...state];
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_CART:
      if (isExist(state, payload)) {
        if (payload.quantity <= 0) {
          return state;
        }
        return copiedState.map((product) =>
          product.id === payload.id
            ? {
                ...product,
                quantity: product.quantity + -1,
                cartQuantity: product.cartQuantity + 1,
              }
            : product
        );
      } else {
        copiedState.push({
          ...payload,
          cartQuantity: 1,
          quantity: payload.quantity - 1,
        });
        return copiedState;
      }
    case REMOVE_FROM_CART:
      const currentProduct = state.find((product) => product.id === payload.id);
      if (currentProduct.cartQuantity > 1) {
        return copiedState.map((product) =>
          product.id === payload.id
            ? {
                ...product,
                cartQuantity: product.cartQuantity - 1,
                quantity: product.quantity + 1,
              }
            : product
        );
      } else {
        return copiedState.filter((product) => product.id !== payload.id);
      }

    case DELETE_ITEM:
      return copiedState.filter((product) => product.id !== payload.id);

    default:
      return state;
  }
};

export default cartReducer;
