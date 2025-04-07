import React from "react";

const ModalDetails = ({ isOpen, closeModal, product }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="ui page modals dimmer  visible active">
      <div className="ui modal tiny active transition visible">
        <div className="header">{product.name}</div>

        <div className="content">
          <div className="ui relaxed divided list">
            <div className="item">
              <i className="info circle icon blue large"></i>
              <div className="content">
                <div className="header">Descripción</div>
                <div className="description">{product.description}</div>
              </div>
            </div>
            <div className="item">
              <i className="tags icon teal large"></i>
              <div className="content">
                <div className="header">Categoría</div>
                <div className="description">{product.category}</div>
              </div>
            </div>
            <div className="item">
              <i className="dollar sign icon green large"></i>
              <div className="content">
                <div className="header">Precio</div>
                <div className="description">${product.price}</div>
              </div>
            </div>
            <div className="item">
              <i className="boxes icon orange large"></i>
              <div className="content">
                <div className="header">Stock</div>
                <div className="description">{product.stock}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="actions">
          <button className="ui blue basic button" onClick={closeModal}>
            <i className="times circle icon"></i>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDetails;
