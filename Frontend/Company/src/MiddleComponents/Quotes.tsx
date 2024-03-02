import company from "../assets/Company.jpg";
import "./quotes.css";
const Quotes = () => {
  return (
    <div className="quotes-cont">
      <div className="qoutes-content">
        <h3>
          “ Far and away the best prize that life offers is the chance to work
          hard at work worth doing. ”
        </h3>
        <h4 className="text-danger">- Theodore Roosevelt </h4>
      </div>
      <div className="company-img ">
        <img src={company} alt="" />
      </div>
    </div>
  );
};

export default Quotes;
