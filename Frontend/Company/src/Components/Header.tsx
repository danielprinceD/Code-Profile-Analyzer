import React from "react";
import Button from "./Button";
import "./header.css";
import logo from "../assets/comp.jpg";
import { NavLink } from "react-bootstrap";
export const Header = () => {
  return (
    <div className="header-container ">
      <div className="Logo">
        <img src={logo} alt="" />
        <div className="company-name">
          <h3>Aarav Company</h3>
        </div>
      </div>
      <div className="input-container">
        <div className="input-group mb-3  d-flex gap-3">
          <input
            type="text"
            className="form-control "
            placeholder="Type Here"
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="Nav-bar">
        <a href="/">
          <Button className="btn btn-outline-danger" data="Home"></Button>
        </a>
        <span> </span>
        <a href="/about">
          <Button className="btn btn-outline-danger" data="About Us"></Button>
        </a>
        <span> </span>
        <a href="#foot">
          <Button className="btn btn-outline-danger" data="Contact Us"></Button>
        </a>
      </div>
      <div className="abs">
        <button className="btn btn-outline-danger px-3 py-2"> = </button>
      </div>
    </div>
  );
};
export default Header;
