import { Carousel } from "react-bootstrap";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import "./carouselcomp.css";

const CarouselComp = () => {
  return (
    <div className="carsourel-container">
      <div>
        <div className="list-group group">
          <a
            href="#"
            className="list-group-item bg-secondary list-group-item-action active"
          >
            Table of Content
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Dapibus ac facilisis in
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Morbi leo risus
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Porta ac consectetur ac
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Porta ac consectetur ac
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Porta ac consectetur ac
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Porta ac consectetur ac
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Porta ac consectetur ac
          </a>
        </div>
      </div>
      <div className="carousel-contents">
        <Carousel>
          <Carousel.Item interval={3500}>
            <img className="d-block w-100" src={img1} alt="Image One" />
            <Carousel.Caption>
              <h3></h3>
              <p>Sample Text for Image One</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3500}>
            <img className="d-block w-100" src={img2} alt="Image Two" />
            <Carousel.Caption>
              <h3>Label for second slide</h3>
              <p>Sample Text for Image Two</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3500}>
            <img className="d-block w-100" src={img3} alt="Image Two" />
            <Carousel.Caption>
              <h3>Label for second slide</h3>
              <p>Sample Text for Image Two</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3500}>
            <img className="d-block w-100" src={img4} alt="Image Two" />
            <Carousel.Caption>
              <h3>Label for second slide</h3>
              <p>Sample Text for Image Two</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div>
        <div className="list-group group">
          <a
            href="#"
            className="list-group-item bg-danger list-group-item-action active"
          >
            Updates
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Dapibus ac facilisis in
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Morbi leo risus
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Porta ac consectetur ac
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Morbi leo risus
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Porta ac consectetur ac
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Morbi leo risus
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Porta ac consectetur ac
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Morbi leo risus
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Porta ac consectetur ac
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarouselComp;
