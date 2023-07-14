import express from "express";
import routerProducts from "./routes/index.js";
import dotenv from "dotenv";
import { mongoose } from "mongoose";
dotenv.config();
const app = express();
const { PORT } = process.env;

app.use(express.json());

// mongoose.connect("mongodb://localhost:27017/WD17303");
mongoose.connect("mongodb+srv://hoangnm62:lucnam@1@cluster0.vp0szuy.mongodb.net/");

// mongodb+srv://hoangnm62:<password>@cluster0.vp0szuy.mongodb.net/

app.use("/api", routerProducts);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
