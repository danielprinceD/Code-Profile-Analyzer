import React, { useEffect } from "react";
import Header from "./Components/Header.jsx";
import "./index.css";
import NavBar from "./NavBar/NavBar.jsx";
import { Home } from "./home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./FooterComponent/Footer.jsx";
import ProductCard from "./ProductCard/ProductCard.jsx";
import About from "./Components/about.jsx";
import Executive from "./Components/Executive.jsx";
import Portfolio from "./Portfolio/Portfolio.jsx";
import { Auth, useAuth } from "./Credentials/auth.jsx";
import { Register } from "./Credentials/Register.jsx";
import { Login } from "./Credentials/Login.jsx";
import { Protect } from "./Credentials/Protect.jsx";
export const Main = () => {
  useEffect(() => {}, []);
  return (
    <div>
      <BrowserRouter>
        <div className="main-container">
          <Auth>
            <div className="sticky-top bg-white head-nav-container">
              <Header />

              <NavBar />
            </div>

            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/products" element={<ProductCard />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/executives" element={<Executive />}></Route>

              <Route
                path="/portfolio"
                element={
                  <Protect>
                    <Portfolio />
                  </Protect>
                }
              ></Route>

              <Route path="/signup" element={<Register />}></Route>
              <Route path="/login" element={<Login />}></Route>
            </Routes>

            <Footer />
          </Auth>
        </div>
      </BrowserRouter>
      ;
    </div>
  );
};
