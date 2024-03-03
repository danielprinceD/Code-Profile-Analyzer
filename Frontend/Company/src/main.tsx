import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.tsx";
import "./index.css";
import Quotes from "./MiddleComponents/Quotes.tsx";
import Button from "./Components/Button.tsx";
import Form from "./FormComponent/Form.tsx";
import Footer from "./FooterComponent/Footer.tsx";
import CarouselComp from "./MiddleComponents/CarouselComp.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="main-container">
      <Header />
      <CarouselComp />
      <Quotes />
      <Form />
      <Footer />
    </div>
  </React.StrictMode>
);
