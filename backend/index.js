import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const PORT = process.env.PORT;
import mongoose from "mongoose";
const dbUri = process.env.mongoUri;
const app = express();
import taskRouter from "./routes/taskRouter.js";

app.use(
  cors({
    origin: "https://task-manager-vert-theta.vercel.app",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", taskRouter);

const start = async () => {
  try {
    mongoose.connect(dbUri);

    app.listen(PORT, () => {
      console.log(`App is running on port ${process.env.PORT}....`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
