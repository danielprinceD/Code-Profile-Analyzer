import "./productcard.css";
import Image from "../assets/board.jpg";

interface brand {
  name: string;
  description: string;
  price: number;
}
const ProductCard = ({ name, image, description, price }: brand) => {
  return (
    <div className="product-card-container">
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
    </div>
  );
};

export default ProductCard;
