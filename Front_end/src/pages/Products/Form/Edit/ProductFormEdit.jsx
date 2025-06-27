import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import api from '../../../../configs/axios';

import './ProductFormEdit.css';

export default function ProductFormEdit() {
  const { id: productId } = useParams();
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
    handleEditProduct(formData);
  };

  const handleEditProduct = async () => {
    const { data } = await api.patch(
      `/api/product/edit/${productId}`,
      formData
    );

    if (data.status === 200) {
      navigate('/products');
    }
  };

  const getDetailProduct = async () => {
    const { data } = await api.get(`api/products/${productId}`);
    setFormData(data.data);
  };

  useEffect(() => {
    getDetailProduct();
  }, []);

  return (
    <>
      <h2>Edit Product</h2>
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
