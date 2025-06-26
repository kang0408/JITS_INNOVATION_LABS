import "./ProductList.css";

export default function ProductList({
  productList,
  handleDeleteProduct,
  handleGetProduct,
}) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product) => {
            return (
              <tr key={product.name}>
                <td>
                  <img src={product.img} alt="" width="100px" />
                </td>
                <td className="name">{product.name}</td>
                <td>{product.price}$</td>
                <td>
                  <span className={`status status-${product.status}`}>
                    {product.status}
                  </span>
                </td>
                <td className="action">
                  <div>
                    <button
                      className="edit-btn"
                      onClick={() => handleGetProduct(product)}
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
    </>
  );
}
