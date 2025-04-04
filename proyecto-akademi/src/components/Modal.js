import React from "react";

const Modal = ({ isOpen, closeModal, product }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="ui dimmer modals visible active">
      <div className="ui tiny modal active">
        <div className="header">{product.name}</div>
        <div className="content">
          <p>Descripción: {product.description}</p>
          <p>Categoria: {product.category}</p>
          <p>Precio: {product.price}</p>
          <p>Stock: {product.stock}</p>
        </div>
        <div className="actions">
          <button className="ui basic button" onClick={closeModal}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
