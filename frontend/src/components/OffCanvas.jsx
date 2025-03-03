import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";

const OffCanvas = ({ name, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow}>
        <BiMenuAltRight size={50} />
      </div>
      <Offcanvas show={show} onHide={handleClose} {...props} className="w-75">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fw-bold"> Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="list-unstyled d-flex flex-column gap-3">
            <li>
              <Link className="text-decoration-none nav-list" to="/create">
                New Task
              </Link>
            </li>
            <li>
              <Link className="text-decoration-none nav-list" to="/tasks">
                All Tasks
              </Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffCanvas;
