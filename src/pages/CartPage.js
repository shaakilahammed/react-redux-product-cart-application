import React from 'react';
import { useSelector } from 'react-redux';
import BillDetails from '../components/BillDetails';
import CartItem from '../components/CartItem';

const CartPage = () => {
  const { products } = useSelector((state) => state.cart);
  return (
    <div className="container 2xl:px-8 px-2 mx-auto">
      <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
      <div className="cartListContainer">
        <div className="space-y-6">
          {products.length
            ? products.map((product) => (
                <CartItem key={product.id} {...product} />
              ))
            : 'No product Found on cart'}
        </div>

        <BillDetails />
      </div>
    </div>
  );
};

export default CartPage;
