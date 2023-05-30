import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetail from "../pages/productDetail/ProductDetail";
import Navbar from "../components/Navbar/Navbar";

const PublicRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
};

export default PublicRoutes;
