import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart/actions';

const Product = ({ id, name, category, imageUrl, price, inStock }) => {
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(addToCart({ id, name, category, imageUrl, price, inStock }));
  };
  return (
    <div className="lws-productCard">
      <img className="lws-productImage" src={imageUrl} alt="product" />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{name}</h4>
        <p className="lws-productCategory">{category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{price}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">{inStock}</span>
          </p>
        </div>
        <button className="lws-btnAddToCart" onClick={addToCartHandler}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
