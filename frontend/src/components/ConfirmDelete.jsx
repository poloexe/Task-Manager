import React from "react";
import { Modal, Button } from "react-bootstrap";

const ConfirmDelete = ({ show, handleClose, confirmAction }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Deletion</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <i className="fas fa-exclamation-triangle text-warning fs-1"></i>
        <p className="mb-0">
          Are you sure you want to delete this item?
          <br />
          This action cannot be undone.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          <i className="fas fa-times me-2"></i>Cancel
        </Button>
        <Button variant="danger" onClick={confirmAction}>
          <i className="fas fa-trash-alt me-2"></i>Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmDelete;
