import express from "express";
import {
  create,
  getAll,
  getDetail,
  remove,
  update,
} from "./controllers/products";
const app = express();

app.use(express.json());

app.get("/products", getAll);
app.get("/products/:id", getDetail);
app.put("/products/:id", update);
app.post("/products", create);
app.delete("/products/:id", remove);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
