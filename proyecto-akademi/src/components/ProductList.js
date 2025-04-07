import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/actions";
import { Link } from "react-router-dom";
import ProductTable from "./ProductTable";
import PopUpDelete from "./PopUpDelete";
import ModalDetails from "./ModalDetails";
import PopUpMessage from "./PopUpMessage";
import Pagination from "./Pagination";

const ProductList = ({ products, fetchProducts }) => {
  const [filter, setFilter] = useState("");
  const [order, setOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [isModalOpen, setModalOpen] = useState(false);
  const [isOpenPopUp, setOpenPopUp] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  let filteredProducts = filter
    ? products.filter((p) => p.category === filter)
    : products;

  const onFilterChange = (e) => {
    setFilter(e.target.value);
    setCurrentPage(1);
  };

  const onOrderChange = (e) => {
    setOrder(e.target.value);
    setCurrentPage(1);
  };

  const onSubmitSearch = (event) => {
    event.preventDefault();
    setCurrentPage(1);
  };

  if (inputSearch.trim() !== "") {
    filteredProducts = filteredProducts.filter((p) =>
      p.name.toLowerCase().includes(inputSearch.trim().toLowerCase())
    );
  }

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (order) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  const onResetFilter = () => {
    setFilter("");
    setOrder("");
    setInputSearch("");
    setCurrentPage(1);
  };

  const productsPerPage = 6;
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div className="ui container custom-container">
      <div>
        <form className="ui form" onSubmit={onSubmitSearch}>
          <div className="ui fluid icon input">
            <input
              type="text"
              placeholder="Search..."
              value={inputSearch}
              onChange={(event) => setInputSearch(event.target.value)}
            />
            <i className="search icon"></i>
          </div>
        </form>
      </div>

      <div className="ui form">
        <div className="four fields">
          <div className="field container-btn">
            <Link to="/add-product" className="ui button primary">
              Agregar producto
            </Link>
          </div>

          <div className="field">
            <label>Filtrar</label>
            <select
              className="ui dropdown"
              value={filter}
              onChange={onFilterChange}
            >
              <option value="">-- Seleccionar categoría --</option>
              <option value="celular">Celular</option>
              <option value="laptop">Laptop</option>
              <option value="tablet">Tablet</option>
              <option value="monitor">Monitor</option>
              <option value="smartwatch">Smartwatch</option>
              <option value="auriculares">Auriculares</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div className="field">
            <label>Ordenar</label>
            <select
              className="ui dropdown"
              value={order}
              onChange={onOrderChange}
            >
              <option value="">Ordenar por</option>
              <option value="price-asc">Precio (menor a mayor)</option>
              <option value="price-desc">Precio (mayor a menor)</option>
              <option value="name-asc">Nombre (A-Z)</option>
              <option value="name-desc">Nombre (Z-A)</option>
            </select>
          </div>

          <div className="field container-btn">
            <button className="ui grey button" onClick={onResetFilter}>
              Restaurar filtros
            </button>
          </div>
        </div>
      </div>

      {sortedProducts.length === 0 ? (
        <PopUpMessage />
      ) : (
        <>
          <ProductTable
            products={currentProducts}
            onViewDetail={(product) => {
              setSelectedProduct(product);
              setModalOpen(true);
            }}
            onDelete={(product) => {
              setSelectedProduct(product);
              setOpenPopUp(true);
            }}
          />

          <PopUpDelete
            isOpen={isOpenPopUp}
            product={selectedProduct}
            closePopUp={() => setOpenPopUp(false)}
          />

          <ModalDetails
            isOpen={isModalOpen}
            closeModal={() => setModalOpen(false)}
            product={selectedProduct}
          />

          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, { fetchProducts })(ProductList);
