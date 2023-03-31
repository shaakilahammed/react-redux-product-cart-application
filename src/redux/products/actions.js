import { CREATE_PRODUCT } from './actionTypes';

export const createProduct = (product) => {
  return {
    type: CREATE_PRODUCT,
    payload: product,
  };
};
