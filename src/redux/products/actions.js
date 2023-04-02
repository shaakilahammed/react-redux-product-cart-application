import { CREATE_PRODUCT, STOCK_UPDATE_PRODUCT } from './actionTypes';

export const createProduct = (product) => {
  return {
    type: CREATE_PRODUCT,
    payload: product,
  };
};

export const stockUpdate = (id, updateType) => {
  return {
    type: STOCK_UPDATE_PRODUCT,
    payload: { id, updateType },
  };
};
