import express from "express";
import dotenv from "dotenv";
import router from "./routes";
import mongoose from "mongoose";

dotenv.config();
const { PORT, DB_URL } = process.env;

const app = express();

app.use(express.json());

mongoose.connect(`${DB_URL}`)
  .then(() => console.log('Connected!'));

app.use("/api", router)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
