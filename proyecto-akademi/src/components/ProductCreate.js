import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addProduct } from "../actions";

const ProductCreate = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm(); // registro y manejo del form

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (formValues) => {
    dispatch(addProduct(formValues));
    navigate("/"); // redirige despues de agregra
  };

  return (
    <form
      className="ui container form custom-container"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="field">
        <label>Nombre</label>
        <input
          type="text"
          {...register("name", {
            required: true,
          })}
          placeholder="Nombre del producto"
        />
        {errors.name?.type === "required" && (
          <p>El campo es requerido, y debe tener minimo 2 caracteres</p>
        )}
      </div>

      <div className="field">
        <label>Categoría</label>
        <input type="text" {...register("category")} placeholder="Categoría" />
      </div>

      <div className="field">
        <label>Precio</label>
        <input type="number" {...register("price")} placeholder="Precio" />
      </div>

      <div className="field">
        <label>Stock</label>
        <input
          type="number"
          {...register("stock")}
          placeholder="Cantidad en stock"
        />
      </div>

      <div className="field">
        <label>Descripción</label>
        <textarea
          {...register("description")}
          placeholder="Descripción del producto"
        />
      </div>

      <button className="ui button primary" type="submit">
        Agregar Producto
      </button>
    </form>
  );
};

export default ProductCreate;
