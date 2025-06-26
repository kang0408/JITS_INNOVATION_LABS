import { useState } from "react";

import ProductForm from "./Form/ProductForm";
import ProductList from "./List/ProductList";

export default function Product() {
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    status: "active",
    img: "logo.png",
  });

  const [productList, setProductList] = useState([
    {
      id: 1,
      img: "logo.png",
      name: "Product 1",
      price: 20.0,
      status: "active",
    },
    {
      id: 2,
      img: "logo.png",
      name: "Product 2",
      price: 15.5,
      status: "inactive",
    },
    {
      id: 3,
      img: "logo.png",
      name: "Product 3",
      price: 9.99,
      status: "active",
    },
  ]);

  const handleAddProduct = (item) => {
    setProductList([...productList, { id: productList.length + 1, ...item }]);
  };

  const handleEditProduct = (item) => {
    const existedIndex = productList.findIndex(
      (product) => product.id == item.id
    );
    if (existedIndex !== -1) {
      const updatedList = [...productList];
      updatedList[existedIndex] = { ...updatedList[existedIndex], ...item };
      setProductList(updatedList);
    }
  };

  const handleDeleteProduct = (item) => {
    const list = productList.filter((product) => product.id !== item.id);
    setProductList(list);
  };

  const handleGetProduct = (item) => {
    setFormData(item);
  };
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
      />
    </>
  );
}
