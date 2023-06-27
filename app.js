// import { createServer } from "http";

// const server = createServer((req, res) => {
//   res.end(`<h1>Xin chao ca lop!</h1>`);
// });

import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.end(`<h1>Day la trang chu</h1>`);
});
app.get("/about", (req, res) => {
  res.end(`<h1>Day la trang about</h1>`);
});

app.listen(8088, () => {
  console.log("Server is running on port 8088");
});

// Bước 1: tạo folder -> npm init -y
// Bước 2: cd folder -> create app.js
