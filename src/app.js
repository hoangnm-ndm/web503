import express from "express";
import dotenv from "dotenv";
import { mongoose } from "mongoose";
import router from "./routes";
dotenv.config();
const app = express();
const { PORT } = process.env;

app.use(express.json());

// mongoose.connect("mongodb://localhost:27017/WD17303");
mongoose.connect("mongodb+srv://hoangnm62:w2k1KNGagVMMIlwJ@cluster0.pfmupjv.mongodb.net/web69");


app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
