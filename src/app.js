import express from "express"; // module syntax
import router from "./routes";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
const app = express();
dotenv.config();

const { PORT, DB_URI } = process.env;
app.use(express.json());
app.use(cors());
mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("Database connected!");
  })
  .catch((err) => {
    console.log("Database connect failed!");
  });

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
