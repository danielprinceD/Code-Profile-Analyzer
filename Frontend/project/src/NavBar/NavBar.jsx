import "bootstrap/dist/css/bootstrap.css";
import "./nav-bar.css";
import { useAuth } from "../Credentials/auth";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
var NavBar = () => {
  const auth = useAuth();
  return (
    <div className="navigation-container">
      <div className="navbar navbar-dark bg-danger  d-flex justify-content-center">
        <ul className="navbar-nav dark d-flex flex-row gap-5 justify-content-center">
          <li className="nav-item active px-5 ">
            <NavLink
              className="nav-link text-white hover-change px-5"
              to="/products"
            >
              Our Products
            </NavLink>
          </li>
          <li className="nav-item active px-2 ">
            <a
              className="nav-link text-white hover-change px-5"
              href="/executives"
            >
              Top Executives
            </a>
          </li>
          <li className="nav-item active px-4">
            <NavLink
              className="nav-link text-white hover-change px-5"
              to="/about"
            >
              About Us
            </NavLink>
          </li>
          {sessionStorage.getItem("name") && (
            <li className="nav-item active px-4">
              <NavLink
                className="nav-link text-white hover-change px-5"
                to="/portfolio"
              >
                Portfolio
              </NavLink>
            </li>
          )}
          {!sessionStorage.getItem("name") && (
            <>
              <li>
                <NavLink
                  className="nav-link text-white hover-change px-5"
                  to="/signup"
                >
                  Sign Up
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link text-white hover-change px-5"
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
