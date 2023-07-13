import express from "express";
import dotenv from "dotenv";

import router from "./routes";
import mongoose from "mongoose";
const app = express();

dotenv.config();

const { PORT } = process.env;

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/dm18102").then(() => {
  console.log("Connected!")
})

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
