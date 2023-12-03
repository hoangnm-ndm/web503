import express from "express";
import dotenv from "dotenv";
import router from "./routes";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();
const { PORT, DB_URI } = process.env;
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(`${DB_URI}`).then(() => console.log("Database Connected!"));

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
