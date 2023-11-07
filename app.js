import express from "express"; // module syntax
const app = express();
const port = 8000;

app.use(express.json());

const products = [
  { id: 1, name: "ipad mini", price: 1000 },
  { id: 2, name: "macbook 14inch", price: 2000 },
  { id: 3, name: "apple watch", price: 500 },
];

app.get("/products", (req, res) => {
  res.send({
    message: "Lay danh sach san pham thanh cong!",
    data: products,
  });
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
