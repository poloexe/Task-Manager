import React, { useState, useEffect } from "react";
import { IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import "../App.css";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import ConfirmDelete from "../components/ConfirmDelete.jsx";

const AllTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [taskDeleted, setTaskDeleted] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://task-manager-0qp3.onrender.com/tasks"
        );
        const results = await response.json();

        setTasks(results.tasks);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchTasks();
  }, [taskDeleted]);

  const handleDelete = async (taskId) => {
    try {
      setLoading(true);
      await fetch(`https://task-manager-0qp3.onrender.com/tasks/${taskId}`, {
        method: "DELETE",
      });

      setModalShow(false);
      setTaskDeleted(!taskDeleted);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container d-flex gap-3 flex-column my-5">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="my-tasks fw-medium">My Tasks</h1>
          <Link to="/create" className="text-decoration-none">
            <div
              className="d-flex align-items-center gap-2"
              style={{ color: "#974FD0" }}
            >
              <IoIosAdd size={30} />
              <p className="mb-0 ">Add New Task</p>
            </div>
          </Link>
        </div>

        {/* Tasks */}
        {loading ? (
          <div
            className="spinner-border"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <>
            {tasks.map((task) => (
              <div key={task._id}>
                <div className="border rounded-3 p-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0" id={task.tag.toLowerCase()}>
                      {task.tag}
                    </p>
                    <div className="d-flex gap-3 align-items-center">
                      <Link
                        to={`/edit/${task._id}`}
                        className="text-decoration-none"
                      >
                        <button
                          type="button"
                          className="btn btn-sm px-4 d-flex align-items-center gap-1"
                          id="edit-btn"
                        >
                          <FaRegEdit />
                          Edit
                        </button>
                      </Link>
                      <button
                        type="button"
                        className="btn btn-sm px-4 d-flex align-items-center gap-1"
                        id="delete-btn"
                        onClick={() => setModalShow(true)}
                      >
                        <RiDeleteBinLine />
                        Delete
                      </button>

                      <ConfirmDelete
                        show={modalShow}
                        handleClose={() => setModalShow(false)}
                        confirmAction={() => handleDelete(task._id)}
                      />
                    </div>
                  </div>

                  <hr />

                  <div className="">
                    <h4>{task.title}</h4>
                    <p className="task-text">{task.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default AllTasks;
