// const http = require("node:http");
import express from "express";
import router from "./routes";
const app = express();
import dotenv from "dotenv";

dotenv.config();

const { PORT } = process.env;

app.use(express.json());

app.use("/api", router);
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
