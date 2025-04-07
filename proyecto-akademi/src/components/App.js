import React from "react";
import ProductList from "./ProductList";
import Form from "./Form";
import NavBar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="ui container custom-container ">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/add-product" element={<Form />} />
          <Route path="/products/:id" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
