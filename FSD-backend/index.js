import express from "express";
import userRouter from "./routes/userRoutes.js";
import athleteRouter from "./routes/athletesRoutes.js";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
import dotenv from 'dotenv';
dotenv.config();
app.use("/users", userRouter);
app.use("/athletes", athleteRouter);

const dbUri = process.env.DB_URI;

mongoose
  .connect(dbUri)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
