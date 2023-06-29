// import http from "http";

// const app = http.createServer((req, res) => {
//   // res.end(`<h1>Xin chao cac ban!!</h1>`);
//   console.log("request: ", req);
//   if (req.url == "/" && req.method == "GET") {
//     res.end(`<h1>Day la trang chu</h1>`);
//   }
//   if (req.url == "/products" && req.method == "GET") {
//     res.end(`<h1>Day la trang danh sach san pham</h1>`);
//   }
//   // if("req  = a")
// });

import express from "express";
const app = express();

const products = [
  {
    id: "123",
    name: "Ao vest nam",
    price: 200,
  },

  {
    id: "234",
    name: "Ao vest nu",
    price: 300,
  },
];

app.get("/", (req, res) => {
  res.end(`<h1>Day la trang chu!</h1>`);
});

app.get("/products", (req, res) => {
  // res.end(`<h1>Day la trang danh sach san pham!</h1>`);
  // res.end(JSON.stringify(products));
  res.status(200).json({
    message: "Gọi danh sách sản phẩm thành công!",
    datas: products,
  });
});

app.get("/products/:id", (req, res) => {
  // res.end(`<h1>Day la trang chi tiet san pham co id la ${req.params.id}!</h1>`);
  const id = req.params.id;
  console.log("id: ", id);
  const product = products.find((item) => item.id === id);
  res.status(200).json({
    message: "Gọi chi tiết sản phẩm thành công!",
    datas: product,
  });
});

app.get(`/products`, (req, res) => {
  console.log(req.query);
  res.end(`<h1>Day la trang san pham!</h1>`);
});

app.listen(8088, () => {
  console.log("Server is running on port 8088");
});

// Bước 1: npm init
// Bước 2: cd folder -> tạo file app.js
// Bước 3: Thêm "type": "module" trong package.json
// Bước 4: Refactor dự án
