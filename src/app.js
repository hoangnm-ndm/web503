import express from "express";
import dotenv from "dotenv";
import router from "./routes";
import mongoose from "mongoose";

dotenv.config();
const { PORT } = process.env;

const app = express();

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/dm18106')
  .then(() => console.log('Connected!'));

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
