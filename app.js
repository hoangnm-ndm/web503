// const express = require("express");
import express from "express";
const app = express();
const port = 8000;

const products = [
  { id: 1, name: "laptop gaming acer", price: 1000 },
  { id: 2, name: "laptop dell vostro", price: 2000 },
  { id: 3, name: "macbook", price: 500 },
];

app.use(express.json());

// GET LIST
app.get("/products", (req, res) => {
  // code lai noi dung ben server.js
  res.send(products);
});

// GET DETAIL
app.get("/product/:id", (req, res) => {
  const id = req.params.id; // string
  const product = products.filter((item) => item.id == id);
  // console.log(product);
  res.send(product);
});

// CREATE
app.post("/product", (req, res) => {
  products.push(req.body);
  res.status(201).send({
    messenger: "Them san pham thanh cong",
    data: products,
  });
});

//UPDATE
app.put("/product/:id", (req, res) => {
  const id = req.params.id;
  const newProducts = products.filter((item) =>
    item.id == id ? req.body : item
  );
  res.send({
    messenger: "Thay doi thong tin san pham thanh cong",
    data: newProducts,
  });
});

// DELETE
app.delete("product/:id", (req, res) => {
  const id = req.params.id;
  const newProducts = products.filter((item) => item.id != id);
  res.send({
    messenger: "Xoa san pham thanh cong",
    data: newProducts,
  });
});
app.listen(port, () => {
  console.log(`ung dung dang chay vao file app tren port: ${port}`);
});
