import "./footer.css";

const Footer = () => {
  return (
    <div className="FooterContainer" id="foot">
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
      <div className="d-flex flex-column align-items-center gap-5">
        <div>
          <h1 className="text-danger">Contact Us</h1>
        </div>
        <div className="d-flex w-50 flex-row gap-5 justify-content-around">
          <div className="">
            <table className="d-flex flex-column">
              <tr>
                <th className="text-danger">Email : </th>
                <tr>aaravcompany@gmail.com</tr>
              </tr>
              <tr>
                <th className="text-danger">Phone Number :</th>
                <tr>98765 43210</tr>
              </tr>
              <tr>
                <th className="text-danger">Fax :</th>
                <tr>98765 43210</tr>
              </tr>
              <tr>
                <th className="text-danger">Transport :</th>
                <tr>98765 43210</tr>
              </tr>
            </table>
          </div>
          <form className="d-flex flex-column  gap-4">
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email Address"
                />
              </div>
            </div>
            <center>
              <div>
                <button className="btn btn-danger w-25">Submit</button>
              </div>
            </center>
          </form>
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
