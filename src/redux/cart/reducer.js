import {
  ADD_TO_CART,
  QUANTITY_UPDATE_FROM_CART,
  REMOVE_FROM_CART,
} from './actionTypes';
import initialState from './initialState';

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const product = state.products.find(
        (product) => product.productId === action.payload.id
      );
      let updatedCart;
      if (product) {
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
    case QUANTITY_UPDATE_FROM_CART:
      const selectedProduct = state.products.find(
        (product) => product.id === action.payload.id
      );
      const updatedProducts = state.products.map((product) => {
        if (product.productId === action.payload.id)
          return {
            ...product,
            quantity:
              action.payload.updateType === 'increment'
                ? product.quantity + 1
                : product.quantity - 1
                ? product.quantity - 1
                : 1,
          };
        return product;
      });
      const updatedSubTotalPrice =
        action.payload.updateType === 'increment'
          ? state.subTotal + selectedProduct.price
          : selectedProduct.quantity - 1
          ? state.subTotal - selectedProduct.price
          : state.subTotal;
      return { subTotal: updatedSubTotalPrice, products: [...updatedProducts] };

    default:
      return state;
  }
};

export default cartReducer;
