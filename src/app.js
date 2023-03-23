const express = require("express");
const app = express();
import dotenv from "dotenv";
dotenv.config();
const { PORT } = process.env.PORT;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on: ${PORT}`);
});
