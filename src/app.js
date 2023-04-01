import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/index.js";

const app = express();
dotenv.config();
app.use(cors());

const API_DB = process.env.API_DB;
app.use(express.json());

app.use("/api", router);

mongoose.connect(API_DB);
// app.listen(PORT, () => {
//   console.log(`Server is running on: ${PORT}`);
// });

export const viteNodeApp = app;

/**
 * B1: Tạo router mới routes/auth.js, add router vào trong app.js
 * B2: Tạo controller mới (signin với phương thức post)
 * B3: Validation req.body với Joi -> tách riêng thành schemas/auth.js
 */
