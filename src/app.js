import axios from "axios";
import express from "express";
import router from "./routes";

const app = express();

app.use(express.json());
// app.get("/products", getAll);
// app.get("/products/:id", getDetail);
// app.post("/products", create);
// app.put(`/products/:id`, update);
// app.delete("/products/:id", remove);

app.use("/", router);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
