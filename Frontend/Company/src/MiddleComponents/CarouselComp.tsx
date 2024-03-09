import { Carousel } from "react-bootstrap";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import "./carouselcomp.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const CarouselComp = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div className="carsourel-container">
      <div>
        <div className="list-group group" data-aos="fade-down">
          <a
            href="#"
            className="list-group-item bg-secondary list-group-item-action active"
          >
            Product Updates
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Product Review
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            New Products
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Best Sales
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Selling Partners
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Beta Products
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Announcement
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Opportunities
          </a>
        </div>
      </div>
      <div className="carousel-contents" data-aos="fade-down">
        <Carousel>
          <Carousel.Item interval={3500}>
            <img className="d-block w-100" src={img1} alt="Image One" />
            <Carousel.Caption>
              <h3>Make yourself Yonko</h3>
              <p>Arigatho</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3500}>
            <img className="d-block w-100" src={img2} alt="Image Two" />
            <Carousel.Caption>
              <h3>Innovate New</h3>
              <p>Create an Innovative Environment</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3500}>
            <img className="d-block w-100" src={img3} alt="Image Two" />
            <Carousel.Caption>
              <h3>Get the LeaderShip</h3>
              <p>Upskill the momentem of LeaderShip Quality</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3500}>
            <img className="d-block w-100" src={img4} alt="Image Two" />
            <Carousel.Caption>
              <h3>Become a Techie</h3>
              <p>Technology pave the path to Extrodinary Things</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div>
        <div className="list-group group" data-aos="fade-down">
          <a
            href="#"
            className="list-group-item bg-danger list-group-item-action active"
          >
            Company News
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            New Promoter
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Organization Decision
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Our Next Determination
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            New Ethics
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Be a Partner - CEO
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Make Your Portfolio Glow
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Join as an Intern
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Update News
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Freshers Opportunity
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarouselComp;
