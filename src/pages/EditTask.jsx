import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const EditTask = () => {
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="container py-5" onClick={handleBackButton}>
        <div className="d-flex align-items-center py-3">
          <IoIosArrowBack size={35} className="me-2" />
          <p className="fs-3 mb-0 mt-0">Edit Task</p>
        </div>

        <div className="d-flex flex-column gap-5">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Example label"
            />
            <label>Task Title</label>
          </div>

          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              style={{ height: "200px" }}
            ></textarea>
            <label for="floatingTextarea">Description</label>
          </div>

          <select
            className="form-select form-select-lg mb-3"
            aria-label="Large select example"
          >
            <option selected>Tag</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <button
            type="button"
            className="btn btn-primary btn-lg"
            style={{ backgroundColor: "#980cff" }}
          >
            Done
          </button>

          <div className="d-flex justify-content-center">
            <p
              className="text-decoration-underline"
              style={{ color: "#980cff" }}
            >
              Back to Top
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTask;
