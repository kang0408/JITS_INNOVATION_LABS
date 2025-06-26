import { useState } from "react";

import "./ProductForm.css";

export default function ProductForm({
  formData,
  setFormData,
  handleAddProduct,
  handleEditProduct,
}) {
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    handleAddProduct(formData);
  };

  return (
    <>
      <h2>Create Product</h2>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
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
          <button type="button" onClick={() => handleEditProduct(formData)}>
            Edit
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
