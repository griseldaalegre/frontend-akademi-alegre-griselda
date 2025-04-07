import React from "react";
import { Link } from "react-router-dom";

const ProductTable = ({ products, onViewDetail, onDelete }) => {
  return (
    <table className="ui celled striped compact table">
      <thead>
        <tr>
          <th>Producto</th>
          <th>Precio</th>
          <th>Stock</th>
          <th className="fitted">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>
              <h4 className="ui image header">
                <i className="tablet alternate icon"></i>

                <div className="content">
                  {product.name}
                  <div className="sub header">{product.category}</div>
                </div>
              </h4>
            </td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
            <td className="center aligned middle aligned">
              <div className="ui icon buttons">
                <Link
                  to={`/products/${product.id}`}
                  className="ui blue button"
                  title="Editar"
                >
                  <i className="edit outline icon"></i>
                </Link>
                <button
                  className="ui red button"
                  title="Eliminar"
                  onClick={() => onDelete(product)}
                >
                  <i className="trash icon"></i>
                </button>
                <button
                  className="ui teal button"
                  title="Ver detalle"
                  onClick={() => onViewDetail(product)}
                >
                  <i className="eye icon"></i>
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
