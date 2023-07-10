import express from "express";
import routerProducts from "./routes/index.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const { PORT } = process.env;

app.use(express.json());

// app.get("/products");
// app.get("/products/:id");
// app.delete("/products/:id");
// app.put("/products/:id");
// app.post("/products");

app.use("/api", routerProducts);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
