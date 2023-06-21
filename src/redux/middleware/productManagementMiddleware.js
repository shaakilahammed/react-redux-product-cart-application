import {
  ADD_TO_CART,
  DELETE_ITEM,
  REMOVE_FROM_CART,
} from '../cart/actionTypes';
import {
  addManyQuantity,
  addProductQuantity,
  removeProductQuantity,
} from '../products/actions';

const productManagementMiddleware = (store) => (next) => (action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_CART:
      store.dispatch(removeProductQuantity(payload));
      return next(action);
    case REMOVE_FROM_CART:
      store.dispatch(addProductQuantity(payload));
      return next(action);

    case DELETE_ITEM:
      store.dispatch(addManyQuantity(payload));
      return next(action);
    default:
      return next(action);
  }
};
export default productManagementMiddleware;
