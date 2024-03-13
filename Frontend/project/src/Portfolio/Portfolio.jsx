import "./portfolio.css";
import Profile from "../assets/profile.webp";
import ProgressBar from "react-bootstrap/ProgressBar";
import axios from "axios";
import AOT from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { render } from "react-dom";
import Spinner from "react-bootstrap/Spinner";
const Portfolio = () => {
  const [formData, setFormData] = useState([{}]);
  const [load, loader] = useState(true);
  useEffect(() => {
    AOT.init({ duration: 3000 });
    setTimeout(() => {
      loader(false);
    }, 8000);
    axios({
      method: "get",
      url: "http://127.0.0.1:8001/get/?format=json",
    })
      .then((req) => {
        setFormData(req.data);
        loader(false);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div
      className="portfolio-container d-flex flex-column gap-5 flex-wrap align-items-center"
      data-aos="fade"
    >
      {load ? (
        <>
          <div>
            <Spinner variant="danger" className="loader" animation="border" />
          </div>
        </>
      ) : (
        formData &&
        formData.map((x) => (
          <div className="github-container w-75 " data-aos="slide-right">
            <div className="github-top d-flex flex-column align-items-center">
              <div className="github-top-1">
                <div className="gh-profile d-flex flex-column align-items-center gap-3">
                  <img src={x.ghProfile} alt="" />
                  <h5>
                    <span className="text-danger">Name : </span>
                    {x.name}
                  </h5>
                  <h5>
                    <span className="text-danger">Github : </span>
                    {x.github}
                  </h5>
                  <h5>
                    <span className="text-danger">LeetCode : </span>
                    {x.leetcode}
                  </h5>
                </div>
              </div>
              <div className="github-top-2">
                <img src={x.ghSteak} alt="" />
              </div>
              <div className="github-top-3">
                <img src={x.ghProgram} alt="" />
              </div>
            </div>
            <div className="graph-container d-flex flex-column align-items-center justify-content-evenly">
              <h5>
                Contributions :
                <span className="text-danger"> {x.ghContribution} </span>
                in last year
              </h5>
              <img src={x.ghGraph} alt="" />

              <div className="leetcode-container">
                <h5 className="text-danger">Leet Code Progress Status</h5>
                <h6>
                  <span className="text-success"> Easy </span>- Completed {} /{" "}
                  {}
                </h6>
                <ProgressBar animated min={0} variant="success" now={40} />
                <h6>
                  <span className="text-warning"> Medium </span> - Completed {}{" "}
                  / {}
                </h6>
                <ProgressBar animated variant="warning" now={60} />
                <h6>
                  <span className="text-danger">Hard </span>- Completed {} / {}
                </h6>
                <ProgressBar animated variant="danger" now={30} />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Portfolio;
