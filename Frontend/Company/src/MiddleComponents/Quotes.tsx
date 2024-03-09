import company from "../assets/Company.jpg";
import "./quotes.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Quotes = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  });
  return (
    <div className="quotes-cont" data-aos="fade-right" data-aos-delay="60">
      <div className="qoutes-content">
        <h3>
          “ Far and away the best prize that life offers is the chance to work
          hard at work worth doing. ”
        </h3>
        <h4 className="text-danger">- Theodore Roosevelt </h4>
      </div>
      <div className="company-img d-flex justify-content-center">
        <img src={company} alt="" />
      </div>
    </div>
  );
};

export default Quotes;
