import "./footer.css";

const Footer = () => {
  return (
    <div className="FooterContainer">
      <div className="foot-content">
        <div className="container1">
          <h2 className="text-danger">About TI</h2>
          <div className="items">
            <a href="">Company</a>
            <a href="">Careers</a>
            <a href="">News</a>
            <a href="">Events</a>
          </div>
        </div>
        <div className="container2">
          <h2 className="text-danger">Quick links</h2>
          <div className="items">
            <a href="">Contact us</a>
            <a href="">Packaging</a>
            <a href="">Customer support center</a>
            <a href="">Quality & reliablity</a>
          </div>
        </div>
        <div className="container3">
          <h2 className="text-danger">Buying</h2>
          <div className="items">
            <a href="">TI API suites</a>
            <a href="">Shipping,payment & taxes</a>
            <a href="">Ordering FAQs</a>
            <a href="">Authorized distributors</a>
          </div>
        </div>
      </div>
      <div className="container4">
        <div className="item1">
          <a href="">Accessibility</a>
          <a href="">Cookie policy</a>
          <a href="">Privacy policy</a>
          <a href="">Terms of scale</a>
          <a href="">Terms of use</a>
          <a href="">Trademarks</a>
        </div>
        <div className="item2">
          <p>© Copyright 1995-2024 Aarav Company. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
