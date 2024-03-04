import "bootstrap/dist/css/bootstrap.css";

var NavBar = () => {
  return (
    <div className="navigation-container">
      <div className="navbar navbar-dark bg-danger  d-flex justify-content-center">
        <ul className="navbar-nav dark d-flex flex-row gap-5 justify-content-center">
          <li className="nav-item active px-5 ">
            <a className="nav-link text-white" href="#">
              Products
            </a>
          </li>
          <li className="nav-item active px-2">
            <a className="nav-link text-white" href="#">
              Application
            </a>
          </li>
          <li className="nav-item active px-4">
            <a className="nav-link text-white" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
