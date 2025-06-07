import React from "react";

const NavBar = () => {
  return (
    <>
      {/* <div className="container-fluid"> */}
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container mt-3">
          <a className="navbar-brand me-auto" href="#">
            pram <span className="text-primary fw-bold bg-primary">|</span>  DESIGN
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Samples
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item pe-5">
                <a className="nav-link" href="#">
                  Help
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-user"></i> Account
                </a>
              </li>
              <li className="nav-item position-relative">
                <a className="nav-link" href="#">
                  <i className="fas fa-shopping-cart"></i>Cart
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    3<span className="visually-hidden">items in cart</span>
                  </span>
                </a>
              </li>{" "}
            </ul>
          </div>
        </div>
      </nav>
      {/* </div> */}
    </>
  );
};

export default NavBar;
