import express from "express";
import productRouter from "./routes/product.js";
import authRouter from "./routes/auth.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();

app.use(cors());
const API_DB = process.env.API_DB;
app.use(express.json());

app.use("/api", productRouter);
app.use("/api", authRouter);
// app.use("/api/admin", authRoleAdmin, userRouter);

mongoose.connect(API_DB);

// function Cat(name, age) {
//   (this.name = name), (this.age = age);
// }

// const CatA = new Cat("Dog", 1);

// app.listen(PORT, () => {
//   console.log(`Server is running on: ${PORT}`);
// });

export const viteNodeApp = app;

/**
 * B1: Tạo router mới routes/auth.js, add router vào trong app.js
 * B2: Tạo controller mới (signin với phương thức post)
 *  -
 * B3: Validation req.body với Joi -> tách riêng thành schemas/auth.js
 */
