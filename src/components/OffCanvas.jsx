import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BiMenuAltRight } from "react-icons/bi";


const OffCanvas = ({ name, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow} className="me-2">
        Menu
      </Button> */}

      <div onClick={handleShow}>
        <BiMenuAltRight size={50} />
      </div>
      <Offcanvas show={show} onHide={handleClose} {...props} className="w-75">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffCanvas;
