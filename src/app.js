// const http = require("node:http");
import express from "express";
import router from "./routes";
const app = express();
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const { DB_URI, PORT } = process.env;

app.use(express.json());

// const connect = async () => {
//   try {
//     const data = await mongoose.connect(DB_URI);
//     console.log(data);
//   } catch (error) {}
// };

// connect();

mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((err) => console.log(err));

app.use("/api", router);
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
