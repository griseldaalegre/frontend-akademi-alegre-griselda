import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchProducts, deleteProduct } from "../actions"; //importo
import { Link } from "react-router-dom";
import Modal from "./Modal";

const ProductList = ({ products, fetchProducts, deleteProduct }) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  //modal
  const [isOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  //filtro
  const [filter, setFilter] = useState("");
  const filterChange = (e) => {
    setFilter(e.target.value);
  };
  const [order, setOrder] = useState("");

  // filtro en el render
  const productsFiltered = filter
    ? products.filter((p) => p.category === filter)
    : products;

  //ordenaiento
  const orderChange = (e) => {
    setOrder(e.target.value);
    console.log(order);
  };

  if (order === "price-asc") {
    productsFiltered.sort((a, b) => a.price - b.price);
  } else if (order === "price-desc") {
    productsFiltered.sort((a, b) => b.price - a.price);
  } else if (order === "name-asc") {
    productsFiltered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (order === "name-desc") {
    productsFiltered.sort((a, b) => b.name.localeCompare(a.name));
  }

  return (
    <div className="ui container custom-container">
      <div>
        <select onChange={filterChange}>
          <option value="">Filtrar por tipo</option>
          <option value="celular">Celular</option>
          <option value="pc">PC</option>
        </select>
      </div>

      <div>
        <select onChange={orderChange}>
          <option value="">Ordenar por</option>
          <option value="price-asc">Precio (menor a mayor)</option>
          <option value="price-desc">Precio (mayor a menor)</option>
          <option value="name-asc">Nombre (A-Z)</option>
          <option value="name-desc">Nombre (Z-A)</option>
        </select>
      </div>

      <table className="ui very basic celled table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productsFiltered.map((product) => (
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
                <h4 className="ui image header">
                  <div className="content">
                    <div className="sub header">{product.price}</div>
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
