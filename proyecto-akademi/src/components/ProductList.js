import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions";

class ProductstList extends Component {
  componentDidMount() {
    this.props.fetchProducts();
    console.log(this.props.products);
  }

  renderProducts() {
    if (this.props && this.props.products) {
      return this.props.products.map((product) => {
        return (
          <div className="ui items product-list" key={product.id}>
            <div className="item product-item">
              <div className="ui small image product-image"></div>

              <div className="content">
                <h2 className="header">{product.name}</h2>
                <div className="meta">
                  <span className="category">{product.category}</span>
                </div>
                <div className="description">
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          </div>
        );
      });
    } else {
      return <div>Ocurrió un error al cargar los productos.</div>;
    }
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

export default connect(mapStateToProps, { fetchProducts })(ProductstList);
