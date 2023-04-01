import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/index.js";

//config
const app = express();
const API_DB = process.env.API_DB;
dotenv.config();

// middleware
app.use(cors());
app.use(express.json());

// router
app.use("/api", router);

// database config
mongoose.connect(API_DB);
export const viteNodeApp = app;

/**
 * B1: Tạo router mới routes/auth.js, add router vào trong app.js
 * B2: Tạo controller mới (signin với phương thức post)
 * B3: Validation req.body với Joi -> tách riêng thành schemas/auth.js
 */
