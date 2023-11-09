import axios from "axios";
import express from "express"; // module syntax
const app = express();
const port = 8000;

app.use(express.json());

app.get("/products", async (req, res) => {
  try {
    const { data } = await axios.get("http://localhost:3000/products");
    if (!data || !data.length) {
      // Cach 1:
      return res.status(404).json({
        message: "Khong co san pham nao!",
        data: [],
      });
      // Cach 2:
      // throw new Error("Khong co san pham nao!");
    }
    return res.status(200).json({
      message: "Lay danh sach san pham thanh cong!",
      data,
    });
  } catch (error) {
    console.log(error);
  }
});

app.post("/products", (req, res) => {
  const body = req.body;
  // console.log({ body });
  products.push(body);
  res.send({
    message: "Them san pham thanh cong!",
    data: products,
  });
});

app.put("/products/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  console.log({ id, body });
  res.send({
    message: "Them san pham thanh cong!",
    data: products,
  });
});

app.delete("/products/:id", (req, res) => {
  const id = req.params.id;
  const newProducts = products.filter((item) => item.id !== +id);
  res.send({
    message: "Xoa san pham thanh cong!",
    data: newProducts,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
