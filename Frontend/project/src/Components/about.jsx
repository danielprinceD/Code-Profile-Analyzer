import React, { useEffect } from "react";
import "./about.css";
import Blob from "../assets/Digital-Marketing.gif";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="about-container d-flex " style={{ margin: 0, padding: 0 }}>
      <div className="about-top-content">
        <div className="about-data d-flex flex-column" data-aos="fade-up">
          <h2 className="text-danger"> About Us</h2>
          <div>
            <h6>
              We are a dynamic product-based company with a relentless
              commitment to innovation, dedicated to reaching new heights in
              delivering cutting-edge solutions to meet our customers' evolving
              needs.
            </h6>
          </div>
        </div>

        <div className="about-blob-containter" data-aos="fade-up">
          <div className="about-blob-content">
            <ul className="blob-list d-flex flex-column ">
              <li>
                <h2 className="text-danger list-style-color-head">
                  Aarav Company
                </h2>
              </li>

              <li>
                <h6 className="list-style-color">
                  Aarav Company received industry recognition for excellence,
                  earning{" "}
                  <span className="text-danger">
                    Top Product Quality awards in 2023{" "}
                  </span>
                  .
                </h6>
              </li>
              <li>
                <h6 className="list-style-color">
                  Successfully launched Sales Market, a groundbreaking solution
                  that has revolutionized the{" "}
                  <span className="text-danger">Product Sales Market</span>.
                </h6>
              </li>
              <li>
                <h6 className="list-style-color">
                  Achieved a{" "}
                  <span className="text-danger">
                    98% increase in client satisfaction scores{" "}
                  </span>
                  , demonstrating our commitment to delivering exceptional
                  service and value.
                </h6>
              </li>
              <li>
                <h6 className="list-style-color">
                  Implemented comprehensive{" "}
                  <span className="text-danger">
                    {" "}
                    training programs resulting in 100% increase{" "}
                  </span>{" "}
                  in employee productivity and satisfaction.
                </h6>
              </li>
            </ul>
          </div>
          <div className="about-blob-img">
            <img src={Blob} alt="" />
          </div>
        </div>
        <div
          className="about-year-container d-flex flex-row justify-content-center"
          data-aos="fade-up"
        >
          <div className="about-year-left">
            <h1 className="text-danger">20</h1>
          </div>
          <div className="about-year-right-container">
            <div className="about-year-single">
              <div className="about-year-right" data-aos="fade-up">
                <h1>01</h1>
              </div>
              <div className="year-header">
                <h2 className="text-danger ">Social Responsibility</h2>
              </div>
              <div className="year-content">
                <h4>
                  Aarav Company actively contributed to community welfare by
                  Aarav Company actively contributed to community welfare by
                  [specific philanthropic activity], showcasing our commitment
                  to corporate social responsibility. Aarav Company actively
                  contributed to community welfare by Aarav Company actively
                  contributed to community welfare by [specific philanthropic
                  activity], showcasing our commitment to corporate social
                  responsibility.
                </h4>
              </div>
            </div>
            <div className="about-year-single" data-aos="fade-up">
              <div className="about-year-right">
                <h1>05</h1>
              </div>
              <div className="year-header">
                <h2 className="text-danger">Social Responsibility</h2>
              </div>
              <div className="year-content">
                <h4>
                  Aarav Company actively contributed to community welfare by
                  [specific philanthropic activity], showcasing our commitment
                  to corporate social responsibility. Aarav Company actively
                  contributed to community welfare by [specific philanthropic
                  activity], showcasing our commitment to corporate social
                  responsibility.
                </h4>
              </div>
            </div>
            <div className="about-year-single">
              <div className="about-year-right">
                <h1>10</h1>
              </div>
              <div className="year-header">
                <h2 className="text-danger">Social Responsibility</h2>
              </div>
              <div className="year-content">
                <h4>
                  Aarav Company actively contributed to community welfare by
                  [specific philanthropic activity], showcasing our commitment
                  to corporate social responsibility. Aarav Company actively
                  contributed to community welfare by [specific philanthropic
                  activity], showcasing our commitment to corporate social
                  responsibility.
                </h4>
              </div>
            </div>
            <div className="about-year-single">
              <div className="about-year-right">
                <h1>13</h1>
              </div>
              <div className="year-header">
                <h2 className="text-danger">Social Responsibility</h2>
              </div>
              <div className="year-content">
                <h4>
                  Aarav Company actively contributed to community welfare by
                  [specific philanthropic activity], showcasing our commitment
                  to corporate social responsibility. Aarav Company actively
                  contributed to community welfare by [specific philanthropic
                  activity], showcasing our commitment to corporate social
                  responsibility.
                </h4>
              </div>
            </div>
            <div className="about-year-single">
              <div className="about-year-right">
                <h1>15</h1>
              </div>
              <div className="year-header">
                <h2 className="text-danger">Social Responsibility</h2>
              </div>
              <div className="year-content">
                <h4>
                  Aarav Company actively contributed to community welfare by
                  [specific philanthropic activity], showcasing our commitment
                  to corporate social responsibility. Aarav Company actively
                  contributed to community welfare by [specific philanthropic
                  activity], showcasing our commitment to corporate social
                  responsibility.
                </h4>
              </div>
            </div>
            <div className="about-year-single">
              <div className="about-year-right">
                <h1>19</h1>
              </div>
              <div className="year-header">
                <h2 className="text-danger">Social Responsibility</h2>
              </div>
              <div className="year-content">
                <h4>
                  Aarav Company actively contributed to community welfare by
                  [specific philanthropic activity], showcasing our commitment
                  to corporate social responsibility. Aarav Company actively
                  contributed to community welfare by [specific philanthropic
                  activity], showcasing our commitment to corporate social
                  responsibility.
                </h4>
              </div>
            </div>
            <div className="about-year-single">
              <div className="about-year-right">
                <h1>20</h1>
              </div>
              <div className="year-header">
                <h2 className="text-danger">Social Responsibility</h2>
              </div>
              <div className="year-content">
                <h4>
                  Aarav Company actively contributed to community welfare by
                  [specific philanthropic activity], showcasing our commitment
                  to corporate social responsibility. Aarav Company actively
                  contributed to community welfare by [specific philanthropic
                  activity], showcasing our commitment to corporate social
                  responsibility. to corporate social responsibility.
                </h4>
              </div>
            </div>
            <div className="about-year-single">
              <div className="about-year-right">
                <h1>21</h1>
              </div>
              <div className="year-header">
                <h2 className="text-danger">Social Responsibility</h2>
              </div>
              <div className="year-content">
                <h4>
                  Aarav Company actively contributed to community welfare by
                  [specific philanthropic activity], showcasing our commitment
                  to corporate social responsibility. Aarav Company actively
                  contributed to community welfare by [specific philanthropic
                  activity], showcasing our commitment to corporate social
                  responsibility.
                </h4>
              </div>
            </div>
            <div className="about-year-single">
              <div className="about-year-right">
                <h1>23</h1>
              </div>
              <div className="year-header">
                <h2 className="text-danger">Social Responsibility</h2>
              </div>
              <div className="year-content">
                <h4>
                  Aarav Company actively contributed to community welfare by
                  [specific philanthropic activity], showcasing our commitment
                  to corporate social responsibility. Aarav Company actively
                  contributed to community welfare by [specific philanthropic
                  activity], showcasing our commitment to corporate social
                  responsibility.
                </h4>
              </div>
            </div>
            <div className="about-year-single">
              <div className="about-year-right">
                <h1>24</h1>
              </div>
              <div className="year-header">
                <h2 className="text-danger">Social Responsibility</h2>
              </div>
              <div className="year-content">
                <h4>
                  Aarav Company actively contributed to community welfare by
                  [specific philanthropic activity], showcasing our commitment
                  to corporate social responsibility. Aarav Company actively
                  contributed to community welfare by [specific philanthropic
                  activity], showcasing our commitment to corporate social
                  responsibility.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
