const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());

const products = [
  { id: 1, name: "laptop acer abc", price: 10000000 },
  { id: 2, name: "laptop hp Gaming", price: 20000000 },
  { id: 3, name: "laptop dell vostro", price: 30000000 },
];

// Trả về danh sách
app.get("/api/products", (req, res) => {
  res.json(products);
});
// Trả về một sản phẩm
app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find((product) => product.id == id);
  res.json(product);
});

app.get("/api/product/create", (req, res) => {
  res.send(
    `
      <form action="/api/products" method="post">
      <label for="">name product</label>
      <input type="text" id="productName" />
      <label for="">price product</label>
      <input type="text" id="productPrice" />
      <input type="submit" value="Submit">
      </form>
    `
  );
});

// Thêm sản phẩm
app.post("/api/products", (req, res) => {
  // Lấy dữ liệu từ client body gửi lên
  const product = req.body;
  // push vào mảng products
  products.push(product);
  // trả về client dạng json
  res.json({
    message: "Thêm sản phẩm thành công",
    products,
  });
});
// Xóa sản phẩm
app.delete("/api/products/:id", (req, res) => {
  const id = req.params.id;
  const newProducts = products.filter((item) => item.id != id);
  res.status(200).json({
    message: "Xóa sản phẩm thành công",
    products: newProducts,
  });
});
// Cập nhật sản phẩm

app.put("/api/product/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const newProducts = products.map((item) => (item.id == id ? body : item));
  res.status(200).json({
    message: "Cập nhật sản phẩm thành công",
    products: newProducts,
  });
});

app.listen(port, () => {
  console.log(`ung dung dang chay vao file app tren port: ${port}`);
});
