import React, { useState } from 'react';
import {useDispatch } from 'react-redux';
import {AddItem} from '../store/actions/item.actions';

const App = (props) => {
 const dispatch = useDispatch();
  const [product, setProduct] = useState({
    name: '',
    brand: '',
    price: '',
    description: '',
  });

  const { name, brand, price, description } = product;
  const onChange = (e) => setProduct({ ...product, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(AddItem(product));
  };
  return (
   
      <div className='form-container'>
        <h1>
          React <span className='text-primary'>From</span>
        </h1>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' value={name} onChange={onChange} required />
          </div>
          <div className='form-group'>
            <label htmlFor='brand'>Brand</label>
            <input type='text' name='brand' value={brand} onChange={onChange} required />
          </div>
          <div className='form-group'>
            <label htmlFor='price'>Price</label>
            <input type='text' name='price' value={price} onChange={onChange} required />
          </div>
          <input type='submit' value='Register Product' className='btn btn-primary btn-block' />
        </form>
      </div>
  );
};

export default App;
