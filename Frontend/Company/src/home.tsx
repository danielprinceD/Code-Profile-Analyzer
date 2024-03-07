import React from "react";
import CarouselComp from "./MiddleComponents/CarouselComp";
import Quotes from "./MiddleComponents/Quotes";
import Form from "./FormComponent/Form";
import Footer from "./FooterComponent/Footer";

export const Home = () => {
  return (
    <div>
      <CarouselComp />
      <Quotes />
      <Form />
    </div>
  );
};
