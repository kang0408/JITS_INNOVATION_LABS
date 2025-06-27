import { useState, useEffect } from 'react';

import api from '../../configs/axios';

import ProductForm from './Form/ProductForm';
import ProductList from './List/ProductList';

export default function Product() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    thumbnail: 'logo.png',
    price: 0,
    stock: 0,
    discountPercentage: 0,
    status: 'active',
  });
  const [productList, setProductList] = useState();

  const fetchProducts = async () => {
    setLoading(false);
    const { data } = await api.get('/api/products');

    if (data.status === 200) {
      setLoading(true);
      setProductList(data.data);
    }
  };

  const handleAddProduct = async (item) => {
    const { data } = await api.post('/api/products/add', item);
    if (data.status === 200) {
      fetchProducts();
    }
  };

  const handleEditProduct = async (item) => {
    const existedIndex = productList.findIndex(
      (product) => product.id == item.id
    );

    if (existedIndex !== -1) {
      const { data } = await api.patch(`/api/product/edit/${item.id}`, item);

      if (data.status === 200) {
        fetchProducts();
      }
    }
  };

  const handleDeleteProduct = async (item) => {
    const { data } = await api.delete(`api/product/delete/${item.id}`);

    if (data.status === 200) fetchProducts();
  };

  const handleGetProduct = (item) => {
    setFormData(item);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <ProductForm
        formData={formData}
        setFormData={setFormData}
        handleAddProduct={handleAddProduct}
        handleEditProduct={handleEditProduct}
      />
      <ProductList
        productList={productList}
        handleDeleteProduct={handleDeleteProduct}
        handleGetProduct={handleGetProduct}
        onLoading={loading}
      />
    </>
  );
}
