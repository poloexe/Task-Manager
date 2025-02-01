import React from "react";
import { IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import "../App.css";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

const AllTasks = () => {
  return (
    <>
      <div className="container d-flex gap-3 flex-column my-5">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="my-tasks fw-medium">My Tasks</h1>
          <Link to="/new-task" className="text-decoration-none">
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
        <div className="border rounded-3 p-3">
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0" id="urgent">
              Urgent
            </p>
            <div className="d-flex gap-3 align-items-center">
            <Link to="/edit-task">
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
              >
                <RiDeleteBinLine />
                Delete
              </button>
            </div>
          </div>

          <hr />

          <div className="">
            <h4>FinTech Website Update</h4>
            <p className="task-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
              nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam
              faucibus et magna. Interdum eu tempus ultricies cras neque mi.
              Eget tellus suspendisse et viverra. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Corporis, cum?Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Optio, similique.
            </p>
          </div>
        </div>

        <div className="border rounded-3 p-3">
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0" id="important">
              Important
            </p>
            <div className="d-flex gap-3 align-items-center">
              <Link to="/edit-task">
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
              >
                <RiDeleteBinLine />
                Delete
              </button>
            </div>
          </div>

          <hr />

          <div className="">
            <h4>Agro Website Update</h4>
            <p className="task-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
              nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam
              faucibus et magna. Interdum eu tempus ultricies cras neque mi.
              Eget tellus suspendisse et viverra. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Corporis, cum?Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Optio, similique.
            </p>
          </div>
        </div>

        <div className="border rounded-3 p-3">
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0" id="urgent">
              Urgent
            </p>
            <div className="d-flex gap-3 align-items-center">
              <Link to="/edit-task">
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
              >
                <RiDeleteBinLine />
                Delete
              </button>
            </div>
          </div>

          <hr />

          <div className="">
            <h4>FinTech Website Update</h4>
            <p className="task-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
              nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam
              faucibus et magna. Interdum eu tempus ultricies cras neque mi.
              Eget tellus suspendisse et viverra. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Corporis, cum?Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Optio, similique.
            </p>
          </div>
        </div>

        <div className="border rounded-3 p-3">
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0" id="important">
              Important
            </p>
            <div className="d-flex gap-3 align-items-center">
              <Link to="/edit-task">
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
              >
                <RiDeleteBinLine />
                Delete
              </button>
            </div>
          </div>

          <hr />

          <div className="">
            <h4>Agro Website Update</h4>
            <p className="task-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
              nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam
              faucibus et magna. Interdum eu tempus ultricies cras neque mi.
              Eget tellus suspendisse et viverra. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Corporis, cum?Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Optio, similique.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllTasks;
