import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import "../App.css";
import { useNavigate } from "react-router-dom";

const NewTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("Urgent");
  const [loading, setLoading] = useState("");
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate(-1);
  };

  const handleSaveTask = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);

      const data = { title, description, tag };

      const response = await fetch(
        "https://task-manager-0qp3.onrender.com/tasks",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.message);
      }
      setLoading(false);
      navigate("/tasks");
    } catch (error) {
      alert("An error occured");
      console.log(error);
      setLoading(false);
    }
  };

  // Scroll to top page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="container py-5">
        <div
          className="d-flex align-items-center py-3 gap-2"
          onClick={handleBackButton}
        >
          <IoIosArrowBack size={35} />
          <p className="fs-3 mb-0 mt-0">New Task</p>
        </div>

        {loading ? (
          <div
            className="spinner-border"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          ""
        )}

        <div className="d-flex flex-column gap-5">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Example label"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Task Title</label>
          </div>

          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              style={{ height: "200px" }}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <label>Description</label>
          </div>

          <select
            className="form-select form-select-lg mb-3"
            aria-label="Large select example"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          >
            <option value="Urgent">Urgent</option>
            <option value="Important">Important</option>
          </select>

          <button
            type="button"
            className="btn btn-primary btn-lg"
            style={{ backgroundColor: "#974FD0" }}
            onClick={handleSaveTask}
          >
            Done
          </button>

          <div className="d-flex justify-content-center">
            <p
              className="text-decoration-underline"
              style={{ color: "#980cff" }}
              onClick={scrollToTop}
            >
              Back to Top
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewTask;
