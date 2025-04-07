import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import PopUp from "./PopUpSuccessful";
import { addProduct, editProduct } from "../store/actions";

const Form = ({ products, addProduct, editProduct }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showPopUp, setShowPopUp] = useState(false);
  const [formValues, setFormValues] = useState(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({ mode: "onChange" });

  const productToEdit = id ? products.find((p) => p.id === id) : null;

  useEffect(() => {
    if (id && !productToEdit) {
      backHome();
    }

    if (productToEdit) {
      setValue("name", productToEdit.name || "");
      setValue("category", productToEdit.category || "");
      setValue("price", productToEdit.price || 0);
      setValue("stock", productToEdit.stock || 0);
      setValue("description", productToEdit.description || "");
    }
  }, [id, productToEdit, setValue, navigate]);
  const onSubmit = (data) => {
    setFormValues(data);

    if (productToEdit) {
      editProduct(id, data);
    } else {
      addProduct(data);
    }
    setShowPopUp(true);
    setTimeout(() => {
      setShowPopUp(false);
      backHome();
    }, 1000);
  };

  const backHome = () => {
    navigate("/");
  };

  return (
    <div className="ui centered grid">
      <div className="eight wide column">
        <h1 className="ui header center aligned">
          {productToEdit ? "Editar producto" : "Agregar nuevo producto"}
        </h1>

        <form className="ui container form" onSubmit={handleSubmit(onSubmit)}>
          {showPopUp && <PopUp product={formValues} />}

          <div className={`field ${errors.name ? "error" : ""}`}>
            <label>Nombre</label>
            <input
              type="text"
              {...register("name", {
                required: "El campo es requerido",
                minLength: {
                  value: 2,
                  message: "Debe tener mínimo 2 caracteres",
                },
              })}
              placeholder="Nombre del producto"
            />
            {errors.name && (
              <p className="ui pointing red basic label">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className={`field ${errors.category ? "error" : ""}`}>
            <label>Categoría</label>
            <select
              {...register("category", {
                required: "La categoría es requerida",
              })}
            >
              <option value="">-- Seleccionar categoría --</option>
              <option value="celular">Celular</option>
              <option value="laptop">Laptop</option>
              <option value="tablet">Tablet</option>
              <option value="monitor">Monitor</option>
              <option value="smartwatch">Smartwatch</option>
              <option value="auriculares">Auriculares</option>
            </select>
            {errors.category && (
              <p className="ui pointing red basic label">
                {errors.category.message}
              </p>
            )}
          </div>

          <div className={`field ${errors.price ? "error" : ""}`}>
            <label>Precio</label>
            <input
              type="number"
              {...register("price", {
                required: "El campo es requerido",
                valueAsNumber: true,
                min: {
                  value: 1,
                  message: "El precio debe ser mayor a 0",
                },
              })}
              placeholder="Precio"
            />
            {errors.price && (
              <p className="ui pointing red basic label">
                {errors.price.message}
              </p>
            )}
          </div>

          <div className={`field ${errors.stock ? "error" : ""}`}>
            <label>Stock</label>
            <input
              type="number"
              {...register("stock", {
                required: "El campo es requerido",
                min: {
                  value: 1,
                  message: "El stock debe ser mayor a 0",
                },
              })}
              placeholder="Cantidad en stock"
            />
            {errors.stock && (
              <p className="ui pointing red basic label">
                {errors.stock.message}
              </p>
            )}
          </div>

          <div className={`field ${errors.description ? "error" : ""}`}>
            <label>Descripción</label>
            <textarea
              {...register("description", {
                required: "La descripción es requerida",
                minLength: {
                  value: 5,
                  message: "Debe tener al menos 5 caracteres",
                },
              })}
              placeholder="Descripción del producto"
            />
            {errors.description && (
              <p className="ui pointing red basic label">
                {errors.description.message}
              </p>
            )}
          </div>

          <div>
            <button
              type="button"
              className="ui basic button"
              onClick={backHome}
            >
              Cancelar
            </button>
            <button className="ui button primary" type="submit">
              {productToEdit ? "Guardar cambios" : "Agregar Producto"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, { addProduct, editProduct })(Form);
