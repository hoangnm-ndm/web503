import express from "express";
import routerProduct from "./routes/product.js";
import mongoose from "moongose"

import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(express.json());

mongoose.connect(`${process.env.URI_DB}`);

app.use("/api", routerProduct);
export const viteNodeApp = app;

// app.listen(process.env.PORT, () => {
//   console.log(`Server is running on ${process.env.PORT}`);
// });

// Step 1: tạo file db.json
// Step 2: cài đặt json-server.
// Step 3: cài đặt concurrently
// Step 4: config lại package.json
// Step 5: install axios
// Step 6: Code getlist, getdetails

// Config dotenv
// Step 1: install
// Step 2: import and config
// Step 3: import { mongoose } from 'mongoose';
create .env file
// Step 4: use process.env.TEN_BIEN
// Step 5: gitignore
