import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { addProduct } from "../actions";

const ProductCreate = ({ addProduct, products }) => {
  const { id } = useParams();
  const productToEdit = id ? products.find((p) => p.id === id) : null;

  console.log("Lista de productos:", productToEdit);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (formValues) => {
    addProduct(formValues);
    navigate("/");
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
          <p>El campo es requerido, y debe tener mínimo 2 caracteres</p>
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

// mapeo el estado a las props
const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, { addProduct })(ProductCreate);
