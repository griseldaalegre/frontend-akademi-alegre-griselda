import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import React, { useEffect } from "react";

import { addProduct, editProduct } from "../actions";

const ProductCreate = ({ products, addProduct, editProduct }) => {
  const { id } = useParams();
  let productToEdit = null;
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();

  if (id) {
    productToEdit = id ? products.find((p) => p.id === id) : null;
  } else {
    console.log(" no hay producto  por editar");
  }

  useEffect(() => {
    if (productToEdit) {
      setValue("name", productToEdit.name);
      setValue("category", productToEdit.category);
      setValue("price", productToEdit.price);
      setValue("stock", productToEdit.stock);
      setValue("description", productToEdit.description);
    }
  }, [productToEdit, setValue]);

  const onSubmit = (formValues) => {
    if (productToEdit !== null) {
      editProduct(id, formValues);
      navigate("/");
    } else {
      addProduct(formValues);
      navigate("/");
    }
  };

  return (
    <form
      className="ui container form custom-container"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={`field ${errors.name ? "error" : ""}`}>
        <label>Nombre</label>
        <input
          type="text"
          {...register("name", {
            required: true,
          })}
          placeholder="Nombre del producto"
        />
        {errors.name?.type === "required" && (
          <p className="ui pointing red basic label">
            El campo es requerido, y debe tener mínimo 2 caracteres
          </p>
        )}
      </div>

      <div className={`field ${errors.category ? "error" : ""}`}>
        <label>Categoría</label>
        <input
          type="text"
          {...register("category", {
            required: true,
          })}
          placeholder="Categoría"
        />
        {errors.category?.type === "required" && (
          <p className="ui pointing red basic label">
            El campo es requerido, y debe tener mínimo 2 caracteres
          </p>
        )}
      </div>

      <div className={`field ${errors.price ? "error" : ""}`}>
        <label>Precio</label>
        <input
          type="number"
          {...register("price", {
            required: true,
            valueAsNumber: true,
            min: 1,
          })}
          placeholder="Precio"
        />
        {errors.price?.type === "min" && (
          <p className="ui pointing red basic label">El campo es requerido</p>
        )}
      </div>

      <div className={`field ${errors.stock ? "error" : ""}`}>
        <label>Stock</label>
        <input
          type="number"
          {...register("stock", {
            required: true,
            min: 1,
          })}
          placeholder="Cantidad en stock"
        />
        {errors.stock?.type === "required" && (
          <p className="ui pointing red basic label">
            El campo es requerido, y el stock debe ser mayor a 0
          </p>
        )}
      </div>

      <div className={`field ${errors.description ? "error" : ""}`}>
        <label>Descripción</label>
        <textarea
          {...register("description", {
            required: true,
          })}
          placeholder="Descripción del producto"
        />
      </div>

      <button className="ui button primary" type="submit">
        {productToEdit ? "Guardar cambios" : " Agregar Producto"}
      </button>
    </form>
  );
};

// mapeo el estado a las props
const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, { addProduct, editProduct })(
  ProductCreate
);
