import express from "express";
import routerProduct from "./routes/product.js";
import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/test");
const Cat = mongoose.model("Cat", { name: String });

const kitty = new Cat({ name: "Zildjian" });
kitty.save().then(() => console.log("meow"));

app.use("/api", routerProduct);

export const viteNodeApp = app;
// app.listen(process.env.PORT, () => {
//   console.log(`Server is running on port ${process.env.PORT}`);
// });

// install axios.
// install concurrently
// cau hinh lai package.json
// them thu muc controllers/product.js
// them thu muc routes/product.js
