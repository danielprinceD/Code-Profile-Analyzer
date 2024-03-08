import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.tsx";
import "./index.css";
import NavBar from "./NavBar/NavBar.tsx";
import { Home } from "./home.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./FooterComponent/Footer.tsx";
import ProductCard from "./ProductCard/ProductCard.tsx";
import About from "./Components/about";
import Executive from "./Components/Executive.tsx";
import Portfolio from "./Portfolio/Portfolio.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <div className="main-container">
    <div className="sticky-top bg-white head-nav-container">
      <Header />
      <NavBar />
    </div>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/products" element={<ProductCard />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/executives" element={<Executive />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
      </Routes>
    </BrowserRouter>
    <Footer />
  </div>
);
