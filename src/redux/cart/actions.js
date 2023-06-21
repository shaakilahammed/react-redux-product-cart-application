import { ADD_TO_CART, DELETE_ITEM, REMOVE_FROM_CART } from './actionTypes';

export const addCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};

export const deleteCart = (product) => {
  return {
    type: DELETE_ITEM,
    payload: product,
  };
};
