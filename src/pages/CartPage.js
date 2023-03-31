import React from 'react';
import BillDetails from '../components/BillDetails';
import CartItem from '../components/CartItem';

const CartPage = () => {
  return (
    <div className="container 2xl:px-8 px-2 mx-auto">
      <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
      <div className="cartListContainer">
        <div className="space-y-6">
          <CartItem />
        </div>

        <BillDetails />
      </div>
    </div>
  );
};

export default CartPage;
