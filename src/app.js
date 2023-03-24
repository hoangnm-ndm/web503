import express from "express";
import routerProduct from "./routes/product.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

mongoose.connect(`${process.env.URI_DB}`);

app.use("/api", routerProduct);

export const viteNodeApp = app;

// app.listen(process.env.PORT, () => {
//   console.log(`Server is running on port: ${process.env.PORT}`);
// });

/**
 * Step 1: install json-server
 * Step 2: install concurrently
 * Step 3: install axios
 * Step 4: edit package.json
 * Step 5: setting "type": "module" in package.json
 * Step 6: Add method getAll, getDetail, post, put, delete
 */

/**
 * 1. Tao folder
 * 2. Tao file app.js
 * 3. npm init
 * 4. install các thư viện: express, nodemon, concurrently, dotenv, axios, json-sever
 * 5. Import Express và cấu hình trong file app.js
 * 6. Tạo routes/product.js và cấu hình các routes tại đây.
 * 7. Tạo controllers/product.js và cấu hình các controllers tại đây.
 *
 */

/**
 * Cấu hình joi:
 * 1. npm i joi
 * 2. import Joi from "joi" (controllers)
 * 3.
 */
