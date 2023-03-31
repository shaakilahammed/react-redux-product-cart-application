import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import CartPage from './pages/CartPage';

import HomePage from './pages/HomePage';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavBar />
      <main className="py-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
    </Provider>
  );
};

export default App;
