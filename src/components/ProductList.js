import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';

const ProductList = () => {
  const products = useSelector((state) => state.products);
  return (
    <div className="productContainer" id="lws-productContainer">
      {products.length
        ? products.map((product) => <Product key={product.id} {...product} />)
        : 'No Product Found'}
    </div>
  );
};

export default ProductList;
