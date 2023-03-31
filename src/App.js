import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import CartPage from './pages/CartPage';

import HomePage from './pages/HomePage';

const App = () => {
  return (
    <>
      <NavBar />
      <main className="py-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
