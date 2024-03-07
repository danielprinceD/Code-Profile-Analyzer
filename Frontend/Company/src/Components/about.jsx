import React from "react";
import "./about.css";
const about = () => {
  return (
    <div
      className="about-container d-flex flex-column"
      style={{ margin: 0, padding: 0 }}
    >
      <div className="about-top-content ">
        <div className="about-data">
          <h2>About Us</h2>
          <div>
            <h6>
              We are a dynamic product-based company with a relentless
              commitment to innovation, dedicated to reaching new heights in
              delivering cutting-edge solutions to meet our customers' evolving
              needs.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
