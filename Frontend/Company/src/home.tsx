import React from "react";
import CarouselComp from "./MiddleComponents/CarouselComp";
import Quotes from "./MiddleComponents/Quotes";
import Form from "./FormComponent/Form";
import Footer from "./FooterComponent/Footer";

export const Home = () => {
  return (
    <div className="home-container">
      <CarouselComp />
      <div className="d-flex flex-column flex-wrap p-4">
        <Quotes />
      </div>
      <Form />
    </div>
  );
};
