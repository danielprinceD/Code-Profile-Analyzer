import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.tsx";
import "./index.css";
import Quotes from "./MiddleComponents/Quotes.tsx";
import Form from "./FormComponent/Form.tsx";
import Footer from "./FooterComponent/Footer.tsx";
import CarouselComp from "./MiddleComponents/CarouselComp.tsx";
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
  <React.StrictMode>
    <div className="main-container">
      <Header />
      <CarouselComp />
      <Quotes />
      <ProductCard {...detail1} />
      <Form />
      <Footer />
    </div>
  </React.StrictMode>
);
