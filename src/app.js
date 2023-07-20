import express from "express";
import dotenv from "dotenv";

import router from "./routes";
import mongoose from "mongoose";
const app = express();

dotenv.config();

const { PORT, DB_URI } = process.env;

app.use(express.json());

mongoose.connect(DB_URI).then(() => {
  console.log("Connected!")
})

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
