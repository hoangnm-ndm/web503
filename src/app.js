import express from "express";
import routerProducts from "./routes/index.js";
import dotenv from "dotenv";
import { mongoose } from "mongoose";
dotenv.config();
const app = express();
const { PORT } = process.env;

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/WD17303");

app.use("/api", routerProducts);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
