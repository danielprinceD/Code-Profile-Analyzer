import React from "react";
import "./portfolio.css";
import Profile from "../assets/profile.webp";
const Portfolio = () => {
  return (
    <div className="portfolio-container d-flex flex-column flex-wrap align-items-center">
      <div className="github-container w-75 ">
        <div className="github-top d-flex flex-column align-items-center">
          <div className="github-top-1">
            <div className="gh-profile d-flex flex-column align-items-center gap-3">
              <img src={Profile} alt="" />
              <h5>
                <span className="text-danger">Name : </span>Daniel Prince D
              </h5>
              <h5>
                <span className="text-danger">Github : </span>
                danielprinceD
              </h5>
              <h5>
                <span className="text-danger">LeetCode : </span>danielprinceD
              </h5>
            </div>
          </div>
          <div className="github-top-2">
            <img
              src="https://streak-stats.demolab.com/?user=danielprinceD&locale=en&mode=daily&hide_border=false&border_radius=5%5C"
              alt=""
            />
          </div>
          <div className="github-top-3">
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs?username=danielprinceD&locale=en&hide_title=false&layout=compact&card_width=320&langs_count=5&hide_border=false"
              alt=""
            />
          </div>
        </div>
        <div className="graph-container d-flex flex-column align-items-center justify-content-center">
          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=danielprinceD"
            alt=""
          />
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
