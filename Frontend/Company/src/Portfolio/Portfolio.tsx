import "./portfolio.css";
import Profile from "../assets/profile.webp";
import axios from "axios";
import { useEffect, useState } from "react";
const Portfolio = () => {
  const [formData, setFormData] = useState([{}]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://127.0.0.1:8000/get/?format=json",
    })
      .then((req) => setFormData(req.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="portfolio-container d-flex flex-column gap-5 flex-wrap align-items-center">
      {formData.map((x) => (
        <div className="github-container w-75 ">
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
          <div className="graph-container d-flex flex-column align-items-center justify-content-center">
            <img src={x.ghGraph} alt="" />
            <img src="" alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
