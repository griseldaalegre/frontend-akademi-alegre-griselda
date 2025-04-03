import React from "react";
import ProductList from "./ProductList";
import ProductCreate from "./ProductCreate";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/add-product" element={<ProductCreate />} />
          <Route  path="/products/:id" element={<ProductCreate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
