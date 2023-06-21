import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import productManagementMiddleware from './middleware/productManagementMiddleware';
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(productManagementMiddleware))
);

export default store;
