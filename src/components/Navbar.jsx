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

        <div className="d-lg-flex gap-5 align-items-center d-none">
          <ul className="d-flex gap-5 align-items-center list-unstyled">
            <li>
              <Link
                className="text-decoration-none text-dark fw-semibold"
                to="/new-task"
              >
                New Task
              </Link>
            </li>
            <li>
              <Link
                className="text-decoration-none text-dark fw-semibold"
                to="/all-tasks"
              >
                All Tasks
              </Link>
            </li>
            <img src={navImg} alt="nav-img" id="nav-img" />
          </ul>
        </div>

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
