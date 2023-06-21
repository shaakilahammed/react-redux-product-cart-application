import { Provider } from 'react-redux';
import NavBar from './components/NavBar';
import CartPage from './pages/CartPage';

import HomePage from './pages/HomePage';
import store from './redux/store';
import { useState } from 'react';

const App = () => {
  const [isCartPage, setIsCartPage] = useState(false);
  return (
    <Provider store={store}>
      <NavBar setIsCartPage={setIsCartPage} />
      <main className="py-16">{!isCartPage ? <HomePage /> : <CartPage />}</main>
    </Provider>
  );
};

export default App;
