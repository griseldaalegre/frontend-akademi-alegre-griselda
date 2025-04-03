import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProducts, deleteProduct } from "../actions";
import { Link } from "react-router-dom";

const ProductList = ({ products, fetchProducts, deleteProduct }) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="ui container custom-container">
      <table className="ui very basic celled table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <h4 className="ui image header">
                  <i className="file image outline icon"></i>
                  <div className="content">
                    {product.name}
                    <div className="sub header">{product.category}</div>
                  </div>
                </h4>
              </td>
              <td>
                <Link to={`/products/${product.id}`}>
                  <i className="edit outline icon"></i>
                </Link>
                <i
                  className="trash icon"
                  onClick={() => deleteProduct(product.id)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="ui called">
        <Link to="/add-product" className="ui button primary">
          Agregar
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, { fetchProducts, deleteProduct })(
  ProductList
);
