import Tasks from "../model/taskModel.js";

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Tasks.find({});
    return res.status(200).json({ success: true, tasks });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};

const createTasks = async (req, res) => {
  const { title, description, tag } = req.body;
  if (!title || !description || !tag) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide necessary info" });
  }
  try {
    const task = await Tasks.create(req.body);
    return res.status(201).json({ success: true, task });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};

const getById = async (req, res) => {
  const { taskId } = req.params;
  try {
    const task = await Tasks.findById({ _id: taskId });
    return res.status(200).json({ success: true, task });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};

const updateById = async (req, res) => {
  const { taskId } = req.params;
  try {
    const task = await Tasks.findByIdAndUpdate({ _id: taskId }, req.body, {
      new: true,
      runValidators: true,
    });
    return res.status(200).json({ success: true, task });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};

const deleteById = async (req, res) => {
  const { taskId } = req.params;
  try {
    const task = await Tasks.findByIdAndDelete({ _id: taskId });
    return res.status(200).json({ success: true, msg: "Sucessfully Deleted" });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};

export { getAllTasks, createTasks, getById, updateById, deleteById };
