import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../../../configs/axios.js';

import Button from '../../../components/Button/Button.jsx';
import Input from '../../../components/Input/Input.jsx';
import Modal from '../../../components/ModalConfirm/ModalConfirm.jsx';
import Pagination from '../../../components/Pagination/Pagination.jsx';

import './ProductList.css';

export default function ProductList() {
  const navigate = useNavigate();
  const [deletedId, setDeletedId] = useState('');
  const [loading, setLoading] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const [productList, setProductList] = useState();
  const [pageCurrent, setPageCurrent] = useState(1);
  const [itemPerPage] = useState(5);
  const [searchString, setSearchString] = useState('');

  const fetchProducts = async () => {
    setLoading(false);
    const { data } = await api.get('/api/products');

    if (data.status === 200) {
      setLoading(true);
      setProductList(data.data);
    }
  };

  const handleDeleteProduct = async (deletedId) => {
    const { data } = await api.delete(`api/product/delete/${deletedId}`);

    if (data.status === 200) {
      fetchProducts();
      setToggleModal(!toggleModal);
    }
  };

  const handleToggleModal = (product) => {
    setDeletedId(product.id);
    setToggleModal(!toggleModal);
  };

  const navigateToEditPage = (item) => {
    navigate(`/products/edit/${item.id}`);
  };

  const navigateToCreatePage = () => {
    navigate('/products/create');
  };

  const paginateProduct = useMemo(() => {
    if (!productList) return [];
    else {
      const start = (pageCurrent - 1) * itemPerPage;
      const end = start + itemPerPage;
      return productList.slice(start, end);
    }
  }, [pageCurrent, productList]);

  const pageTotal = useMemo(() => {
    return productList ? Math.ceil(productList.length / itemPerPage) : 1;
  }, [productList]);

  const onHandleChange = (e) => {
    setSearchString(e.target.value);
  };

  const onHandleKeyDown = (e) => {
    if (e.key == 'Enter') handleSearch();
  };

  const handleSearch = () => {
    const searchedList = productList.filter((item) =>
      item.title.toLowerCase().includes(searchString.toLowerCase())
    );
    setProductList(searchedList);
  };

  const handleReset = () => {
    setSearchString('');
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <h2>Product List</h2>
      <Button color="primary" handleClick={navigateToCreatePage}>
        Create
      </Button>
      <div className="search-wrapper">
        <Input
          name="search"
          value={searchString}
          onChange={onHandleChange}
          onKeyDown={onHandleKeyDown}
        />
        <Button onClick={handleSearch} color="primary">
          Search
        </Button>
        <Button onClick={handleReset}>Reset</Button>
      </div>
      {loading ? (
        <>
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
              {paginateProduct.map((product) => {
                return (
                  <tr key={product.id}>
                    <td>
                      <div className="img-wrap">
                        <img src={product.thumbnail} alt={product.title} />
                      </div>
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
                        <Button
                          color="primary"
                          handleClick={() => navigateToEditPage(product)}
                        >
                          Edit
                        </Button>
                        <Button handleClick={() => handleToggleModal(product)}>
                          Delete
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="paginate">
            <Pagination
              pageTotal={pageTotal}
              pageCurrent={pageCurrent}
              setPageCurrent={setPageCurrent}
            />
          </div>
        </>
      ) : (
        <h2 style={{ textAlign: 'center' }}>Loading....</h2>
      )}
      <Modal
        title="Are you want to delete this product?"
        content="Be careful! This action can't not roll back"
        modal={toggleModal}
        toggleModal={() => setToggleModal(!toggleModal)}
        onConfirm={() => handleDeleteProduct(deletedId)}
      />
    </>
  );
}
