import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";

mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
