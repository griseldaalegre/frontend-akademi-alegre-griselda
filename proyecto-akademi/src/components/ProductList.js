import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchProducts, deleteProduct } from "../actions"; //importo
import { Link } from "react-router-dom";
import Modal from "./Modal";

const ProductList = ({ products, fetchProducts, deleteProduct }) => {
  //recibo prosp para no usar useDispath pq el conect lo hace auto
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  //modal
  const [isOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

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
                  className="trash icon link"
                  onClick={() => deleteProduct(product.id)}
                ></i>
                <button
                  onClick={() => {
                    setSelectedProduct(product);
                    setModalOpen(true);
                  }}
                >
                  <i class="eye icon link"></i>
                </button>
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

      <Modal
        isOpen={isOpen}
        closeModal={() => setModalOpen(false)}
        product={selectedProduct}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, { fetchProducts, deleteProduct })(
  //inyectao estas acciones
  ProductList
);
