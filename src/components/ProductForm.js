import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/products/actions';

const ProductForm = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: '',
    category: '',
    imgUrl: '',
    price: '',
    quantity: '',
  });
  // const [name, setName] = useState('');
  // const [category, setCategory] = useState('');
  // const [imgUrl, setImgUrl] = useState('');
  // const [price, setPrice] = useState('');
  // const [quantity, setQuantity] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addProduct(input));
    setInput({
      name: '',
      category: '',
      imgUrl: '',
      price: '',
      quantity: '',
    });
  };

  const inputHandler = (e, fieldName) => {
    if (fieldName === 'quantity' || fieldName === 'price') {
      setInput({ ...input, [fieldName]: Number(e.target.value) });
    } else {
      setInput({ ...input, [fieldName]: e.target.value });
    }
  };
  return (
    <div className="formContainer">
      <h4 className="formTitle">Add New Product</h4>
      <form
        className="space-y-4 text-[#534F4F]"
        id="lws-addProductForm"
        onSubmit={submitHandler}
      >
        {/* <!-- product name --> */}
        <div className="space-y-2">
          <label htmlFor="lws-inputName">Product Name</label>
          <input
            className="addProductInput"
            id="lws-inputName"
            type="text"
            value={input?.name}
            onChange={(e) => inputHandler(e, 'name')}
            required
          />
        </div>
        {/* <!-- product category --> */}
        <div className="space-y-2">
          <label htmlFor="lws-inputCategory">Category</label>
          <input
            className="addProductInput"
            id="lws-inputCategory"
            type="text"
            value={input?.category}
            onChange={(e) => inputHandler(e, 'category')}
            required
          />
        </div>
        {/* <!-- product image url --> */}
        <div className="space-y-2">
          <label htmlFor="lws-inputImage">Image Url</label>
          <input
            className="addProductInput"
            id="lws-inputImage"
            type="text"
            value={input?.imgUrl}
            onChange={(e) => inputHandler(e, 'imgUrl')}
            required
          />
        </div>
        {/* <!-- price & quantity container --> */}
        <div className="grid grid-cols-2 gap-8 pb-4">
          {/* <!-- price --> */}
          <div className="space-y-2">
            <label htmlFor="ws-inputPrice">Price</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputPrice"
              value={input?.price}
              onChange={(e) => inputHandler(e, 'price')}
              required
            />
          </div>
          {/* <!-- quantity --> */}
          <div className="space-y-2">
            <label htmlFor="lws-inputQuantity">Quantity</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputQuantity"
              value={input?.quantity}
              onChange={(e) => inputHandler(e, 'quantity')}
              required
            />
          </div>
        </div>
        {/* <!-- submit button --> */}
        <button type="submit" id="lws-inputSubmit" className="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
