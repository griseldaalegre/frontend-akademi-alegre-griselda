import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="ui menu container">
      <Link to="/" className="item">
        <i className="home icon"></i>
        Inicio
      </Link>

      <Link to="/add-product" className="item">
        <i className="plus square icon"></i>
        Nuevo Producto
      </Link>
    </div>
  );
};

export default Navbar;
