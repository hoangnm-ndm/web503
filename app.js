// import { createServer } from "http";

// const server = createServer((req, res) => {
//   res.end(`<h1>Xin chao cac ban!!</h1>`);
// });

import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.end(`<h1>Day la trang chu!</h1>`);
});

// app.get("/products", (req, res) => {
//   res.end(`<h1>Day la trang san pham!</h1>`);
// });
app.get("/products/:id", (req, res) => {
  res.end(`<h1>Day la trang chi tiet san pham co id la ${req.params.id}!</h1>`);
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
