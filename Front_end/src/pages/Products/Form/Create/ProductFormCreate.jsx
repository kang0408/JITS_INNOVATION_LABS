import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../../../../configs/axios';

import Button from '../../../../components/Button/Button';
import Input from '../../../../components/Input/Input';
import Form from '../../../../components/Form/Form';

export default function ProductFormCreate() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    thumbnail: 'logo.png',
    price: '',
    stock: 0,
    discountPercentage: 0,
    status: 'active',
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitForm = () => {
    console.log(formData);
    handleAddProduct(formData);
  };

  const handleAddProduct = async (item) => {
    const { data } = await api.post('/api/products/add', item);
    if (data.status === 200) {
      navigate('/products');
    }
    navigate('/products');
  };

  const backToProductList = () => {
    navigate('/products');
  };

  const validater = [
    {
      field: 'title',
      validate: (value) => {
        if (value.length == '') return 'This field is not empty';
        if (value.length < 5) return 'Title is too short';
      },
    },
    {
      field: 'price',
      validate: (value) => {
        if (value == 0) return 'This field is not empty';
        if (value < 0) return 'Price greater than 0';
      },
    },
  ];

  return (
    <>
      <h2>Create Product</h2>
      <Form data={formData} validater={validater} handleSubmit={submitForm}>
        <Input
          label={'Title'}
          name={'title'}
          value={formData.title}
          onChange={onHandleChange}
          required
        />
        <Input
          label={'Price'}
          name={'price'}
          value={formData.price}
          onChange={onHandleChange}
          required
        />
        <Input
          label={'Discount Percentage'}
          name={'discountPercentage'}
          value={formData.discountPercentage}
          onChange={onHandleChange}
        />
        <Input
          label={'Stock'}
          name={'stock'}
          value={formData.stock}
          onChange={onHandleChange}
        />
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
          <Button color="primary" type="submit">
            Submit
          </Button>
          <Button type="button" handleClick={backToProductList}>
            Back
          </Button>
        </div>
      </Form>
    </>
  );
}
