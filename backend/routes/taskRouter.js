import { Router } from "express";
const router = Router();
import {
  getAllTasks,
  createTasks,
  getById,
  updateById,
  deleteById,
} from "../controller/taskController.js";

router.route("/tasks").get(getAllTasks).post(createTasks);
router
  .route("/tasks/:taskId")
  .get(getById)
  .patch(updateById)
  .delete(deleteById);

export default router;
