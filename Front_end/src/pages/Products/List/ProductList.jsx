import './ProductList.css';

export default function ProductList({
  productList,
  handleDeleteProduct,
  handleGetProduct,
  onLoading,
}) {
  return (
    <>
      {onLoading ? (
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
      ) : (
        <h2 style={{ textAlign: 'center' }}>Loading....</h2>
      )}
    </>
  );
}
