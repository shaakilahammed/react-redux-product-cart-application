import React from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const HomePage = () => {
  return (
    <div className="productWrapper">
      <ProductList />
      <div>
        <ProductForm />
      </div>
    </div>
  );
};

export default HomePage;
