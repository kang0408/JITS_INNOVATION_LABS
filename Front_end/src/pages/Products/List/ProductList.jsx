import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../../../configs/axios.js';

import './ProductList.css';

export default function ProductList() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [productList, setProductList] = useState();

  const fetchProducts = async () => {
    setLoading(false);
    const { data } = await api.get('/api/products');

    if (data.status === 200) {
      setLoading(true);
      setProductList(data.data);
    }
  };

  const handleDeleteProduct = async (item) => {
    const { data } = await api.delete(`api/product/delete/${item.id}`);

    if (data.status === 200) fetchProducts();
  };

  const navigateToEditPage = (item) => {
    navigate(`/products/edit/${item.id}`);
  };

  const navigateToCreatePage = () => {
    navigate('/products/create');
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <h2>Product List</h2>
      <button onClick={navigateToCreatePage}>Create</button>
      {loading ? (
        <table>
          <thead>
            <tr>
              <th>Thumbnail</th>
              <th>Title</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product) => {
              return (
                <tr key={product.id}>
                  <td>
                    <img src={product.thumbnail} alt="" width="100px" />
                  </td>
                  <td className="name">{product.title}</td>
                  <td>{product.price}$</td>
                  <td>{product.discountPercentage}%</td>
                  <td>{product.stock}</td>
                  <td>
                    <span className={`status status-${product.status}`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="action">
                    <div>
                      <button
                        className="edit-btn"
                        onClick={() => navigateToEditPage(product)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => handleDeleteProduct(product)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h2 style={{ textAlign: 'center' }}>Loading....</h2>
      )}
    </>
  );
}
