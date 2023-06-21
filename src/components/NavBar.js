import React from 'react';
import { useSelector } from 'react-redux';
import logoImage from '../assets/images/logo.png';
const calculateProductCount = (products) => {
  return products.reduce(
    (totalProduct, product) => product.cartQuantity + totalProduct,
    0
  );
};
const NavBar = ({ setIsCartPage }) => {
  const products = useSelector((state) => state.cart);

  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <a onClick={() => setIsCartPage(false)} href="/#">
          <img src={logoImage} alt="LWS" className="max-w-[140px]" />
        </a>

        <div className="flex gap-4">
          <a
            href="/#"
            onClick={() => setIsCartPage(false)}
            className="navHome"
            id="lws-home"
          >
            Home
          </a>
          <a
            href="/#"
            onClick={() => setIsCartPage(true)}
            className="navCart"
            id="lws-cart"
          >
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">{calculateProductCount(products)}</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
