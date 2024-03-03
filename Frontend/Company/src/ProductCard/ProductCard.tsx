import "./productcard.css";
import Image from "../assets/board.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface brand {
  name: string;
  description: string;
  price: number;
}
const ProductCard = ({ name, description, price }: brand) => {
  return (
    <div className="product-card-container">
      <Carousel>
        <div className="cards-title">
          <h2>Our Best Products</h2>
        </div>
        <div className="title-product">
          <a className="product-card text-decoration-none">
            <img className="product-card__image" src={Image} />
            <p className="product-card__brand text-danger ">{name}</p>
            <p className="product-card__description text-secondary text-dark">
              {description}
            </p>
            <button className="btn btn-outline-danger my-3">₹ {price}</button>
          </a>
          <a className="product-card text-decoration-none">
            <img className="product-card__image" src={Image} />
            <p className="product-card__brand text-danger">{name}</p>
            <p className="product-card__description text-dark">{description}</p>
            <button className="btn btn-outline-danger my-3">₹ {price}</button>
          </a>
          <a className="product-card text-decoration-none">
            <img className="product-card__image" src={Image} />
            <p className="product-card__brand text-danger">{name}</p>
            <p className="product-card__description text-dark">{description}</p>
            <button className="btn btn-outline-danger my-3">₹ {price}</button>
          </a>
          <a className="product-card text-decoration-none">
            <img className="product-card__image " src={Image} />
            <p className="product-card__brand text-danger">{name}</p>
            <p className="product-card__description text-dark">{description}</p>
            <button className="btn btn-outline-danger my-3">₹ {price}</button>
          </a>
          <a className="product-card text-decoration-none">
            <img className="product-card__image " src={Image} />
            <p className="product-card__brand text-danger">{name}</p>
            <p className="product-card__description text-dark">{description}</p>
            <button className="btn btn-outline-danger my-3">₹ {price}</button>
          </a>
        </div>
      </Carousel>
    </div>
  );
};

export default ProductCard;
