import mongoose from "mongoose";
const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title"],
      unique: true,
    },

    description: {
      type: String,
      required: [true, "Please provide a description"],
    },

    tag: {
      type: String,
      required: true,
      enum: ["Urgent", "Important"],
      message: "Tag must be one of the following",
    },
  },
  { timestamps: true }
);

const Tasks = mongoose.model("Tasks", taskSchema);
export default Tasks;
