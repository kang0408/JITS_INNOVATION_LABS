import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../../../../configs/axios';

import './ProductFormCreate.css';

export default function ProductFormCreate() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    thumbnail: 'logo.png',
    price: 0,
    stock: 0,
    discountPercentage: 0,
    status: 'active',
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    handleAddProduct(formData);
  };

  const handleAddProduct = async (item) => {
    const { data } = await api.post('/api/products/add', item);
    if (data.status === 200) {
      navigate('/products');
    }
  };

  return (
    <>
      <h2>Create Product</h2>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={onHandleChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="input"
            name="price"
            value={formData.price}
            onChange={onHandleChange}
          />
        </div>
        <div>
          <label htmlFor="discountPercentage">Discount:</label>
          <input
            type="input"
            name="discountPercentage"
            value={formData.discountPercentage}
            onChange={onHandleChange}
          />
        </div>
        <div>
          <label htmlFor="stock">Stock:</label>
          <input
            type="input"
            name="stock"
            value={formData.stock}
            onChange={onHandleChange}
          />
        </div>
        <div>
          <label htmlFor="status">Status:</label>
          <select
            name="status"
            value={formData.status}
            onChange={onHandleChange}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <div className="action">
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
