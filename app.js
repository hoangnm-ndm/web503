// import http from "http";

// const app = http.createServer((req, res) => {
//   if (req.url === "/products" && req.method === "GET") {
//     res.end(`<h1>Day la trang danh sach san pham</h1>`);
//   }
//   if (req.url === "/about" && req.method === "GET") {
//     res.end(`<h1>Day la trang about</h1>`);
//   }
//   if (req.url === "/products/:id" && req.method === "GET") {
//     res.end(`<h1>Day la trang chi tiet san pham</h1>`);
//   }
// });

const products = [
  { id: "123", name: "Ao vest nam", price: 200000 },
  { id: "234", name: "Ao vest nu", price: 300000 },
  { id: "345", name: "Dam di bay", price: 400000 },
];
import express from "express";
const app = express();

app.get("/products", (req, res) => {
  // res.end(`<h1>Day la trang san pham</h1>`);
  // res.end(JSON.stringify(products));
  if (!products) {
    return res.status(404).json({
      message: "Không tìm thấy sản phẩm",
    });
  }
  return res.status(200).json({
    message: "Hiển thị danh sách sản phẩm thành công!",
    datas: products,
  });
});
app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find((product) => product.id === id);
  if (!product) {
    return res.status(404).json({
      message: "Không tìm thấy sản phẩm",
    });
  }

  return res.status(200).json({
    message: "Hiển thị chi tiết sản phẩm thành công!",
    datas: product,
  });
});

app.delete("/products/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find((product) => product.id === id);
  if (!product) {
    return res.status(404).json({
      message: "Không tìm thấy sản phẩm",
    });
  }

  const newProducts = products.filter((product) => product.id !== id);

  return res.status(200).json({
    message: "Xoá sản phẩm thành công!",
    datas: product,
    newProducts,
  });
});

app.listen(8088, () => {
  console.log("Server is running on port 8088");
});

// Bước 1: tạo folder -> npm init -y
// Bước 2: cd folder -> create app.js
