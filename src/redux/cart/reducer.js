import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';
import initialState from './initialState';

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      //   const product = findProduct(state.products, action.payload);
      //   console.log(product);
      let updatedCart;
      if (
        state.products.find(
          (product) => product.productId === action.payload.id
        )
      ) {
        updatedCart = state.products.map((product) => {
          if (product.productId === action.payload.id) {
            return { ...product, quantity: +product.quantity + 1 };
          }
          return product;
        });
      } else {
        updatedCart = [
          ...state.products,
          { productId: action.payload.id, ...action.payload },
        ];
      }
      const updatedSubTotal = +state.subTotal + +action.payload.price;
      return {
        products: updatedCart,
        subTotal: updatedSubTotal,
      };
    case REMOVE_FROM_CART:
      const { price } = state.products.find(
        (product) => product.id === action.payload
      );
      const filteredProduct = state.products.filter(
        (product) => product.id !== action.payload
      );
      const newSubTotal = +state.subTotal - +price;
      return {
        products: [...filteredProduct],
        subTotal: newSubTotal,
      };
    default:
      return state;
  }
};

export default cartReducer;
