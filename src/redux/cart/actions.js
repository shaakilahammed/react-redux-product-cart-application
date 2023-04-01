import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: { ...product, quantity: 1 },
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};
