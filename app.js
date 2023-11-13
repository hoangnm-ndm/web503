// const http = require("node:http");
import express from "express";
import router from "./routes";
const app = express();
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const { PORT } = process.env;

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/web18202_db")
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((err) => console.log(err));

app.use("/api", router);
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
