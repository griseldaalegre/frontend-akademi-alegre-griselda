import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts, deleteProduct } from "../actions";
import { Link } from "react-router-dom";

class ProductstList extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  renderCreateProduct() {
    return (
      <div className="ui container ">
        <Link to="/add-product" className="ui button primary">
          Agregar
        </Link>
      </div>
    );
  }

  onDeleteClick() {
    this.props.deleteProduct(this.props.id);
  }

  renderProducts() {
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
            {this.props.products.map((product) => (
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
                  <i className="edit outline icon"></i>
                  <i
                    className="trash icon"
                    onClick={() => this.props.deleteProduct(product.id)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="ui called">{this.renderCreateProduct()}</div>
      </div>
    );
  }

  render() {
    return <div>{this.renderProducts()}</div>;
  }
}

// convierte el mi estado global en props para el componente
const mapStateToProps = (state) => {
  // console.log(state.products);
  return { products: state.products };
};

export default connect(mapStateToProps, { fetchProducts, deleteProduct })(
  ProductstList
); //conexion con acciones de  redux
