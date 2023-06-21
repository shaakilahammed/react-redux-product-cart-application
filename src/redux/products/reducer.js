import {
  ADD_MANY_QUANTITY,
  ADD_PRODUCT,
  ADD_PRODUCT_QUANTITY,
  REMOVE_PRODUCT_QUANTITY,
} from './actionTypes';
import initialState from './initialState';
const nextProductId = (products) => {
  return (
    products.reduce((maxId, product) => Math.max(product.id, maxId), -1) + 1
  );
};
// const nextId = (state)=> state.reduce((maxID, item)=>Math.max(item.id, maxID), -1) +1;

const productsReducer = (state = initialState, action) => {
  const copiedState = [...state];
  const { type, payload } = action;
  switch (type) {
    case ADD_PRODUCT:
      const newProduct = { ...payload, id: nextProductId(state) };
      copiedState.push(newProduct);
      return copiedState;
    case ADD_PRODUCT_QUANTITY:
      return copiedState.map((product) =>
        product.id === payload.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
    case REMOVE_PRODUCT_QUANTITY:
      if (payload.quantity <= 0) {
        return state;
      } else {
        return copiedState.map((product) =>
          product.id === payload.id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        );
      }

    case ADD_MANY_QUANTITY:
      return copiedState.map((product) =>
        product.id === payload.id
          ? { ...product, quantity: product.quantity + payload.cartQuantity }
          : product
      );

    default:
      return state;
  }
};

export default productsReducer;
