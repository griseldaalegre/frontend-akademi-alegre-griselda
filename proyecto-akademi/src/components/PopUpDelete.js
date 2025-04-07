import React from "react";
import { connect } from "react-redux";
import { deleteProduct } from "../store/actions";

const PopUpDelete = ({ isOpen, closePopUp, product, deleteProduct }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="ui dimmer modals visible active">
      <div className="ui small modal active">
        <div className="header">Eliminar producto</div>

        <div className="content">
          <p>
            ¿Estás seguro que querés eliminar <strong>{product.name}</strong>?
          </p>
        </div>

        <div className="actions">
          <button
            className="ui red button"
            onClick={() => {
              deleteProduct(product.id);
              closePopUp();
            }}
          >
            Eliminar
          </button>
          <button className="ui button" onClick={closePopUp}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { deleteProduct })(PopUpDelete);
