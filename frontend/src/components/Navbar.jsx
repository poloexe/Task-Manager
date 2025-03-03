import React from "react";
import navLogo from "../assets/nav-logo.svg";
import navImg from "../assets/nav-image.svg";
import OffCanvas from "./OffCanvas";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="container d-flex justify-content-between align-items-center">
        <Link to="/">
          <img src={navLogo} alt="nav-logo" />
        </Link>

        <ul className="d-lg-flex d-none gap-5 mb-0 align-items-center list-unstyled">
          <li>
            <Link
              className="text-decoration-none text-dark fw-semibold"
              to="/create"
            >
              New Task
            </Link>
          </li>
          <li>
            <Link
              className="text-decoration-none text-dark fw-semibold"
              to="/tasks"
            >
              All Tasks
            </Link>
          </li>
          <img src={navImg} alt="nav-img" id="nav-img" />
        </ul>

        <div className="d-lg-none">
          {["end"].map((placement, idx) => (
            <OffCanvas key={idx} placement={placement} name={placement} />
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
