import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.tsx";
import "./index.css";
import NavBar from "./NavBar/NavBar.tsx";
import { Home } from "./home.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./FooterComponent/Footer.tsx";
import ProductCard from "./ProductCard/ProductCard.tsx";
const detail1 = {
  name: "Arduino UNO Board",
  description: "Our Best Selling Product",

  price: 1000,
};
const detail2 = {
  name: "Arduino UNO Board",
  description: "Our Best Selling Product",

  price: 1000,
};
const detail3 = {
  name: "Arduino UNO Board",
  description: "Our Best Selling Product",

  price: 1000,
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <div className="main-container">
    <div>
      <Header />
      <NavBar />
    </div>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/products" element={<ProductCard />}></Route>
      </Routes>
    </BrowserRouter>
    <Footer />
  </div>
);
