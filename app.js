// const express = require("express");
import express from "express";
import axios from "axios";
const app = express();
const port = 8000;

app.use(express.json());

// GET LIST
app.get("/products", async (req, res) => {
  try {
    const { data: products } = await axios.get(
      "http://localhost:3001/products"
    );
    if (products.length === 0) {
      res.send({
        messenger: "Danh sách sản phẩm trống",
      });
    }
    return res.json(products);
  } catch (err) {
    res.send({
      messenger: err,
    });
  }
});

// GET DETAIL
app.get("/products", async (req, res) => {
  try {
    const { data: product } = await axios.get(
      `http://localhost:3001/products/${req.params.id}`
    );
    if (!product) {
      res.send({
        messenger: "Không tìm thấy sản phẩm",
      });
    }
    return res.json(product);
  } catch (err) {
    res.send({
      messenger: err,
    });
  }
});

// CREATE
// app.post("/product", (req, res) => {
//   products.push(req.body);
//   res.status(201).send({
//     messenger: "Them san pham thanh cong",
//     data: products,
//   });
// });

app.post("/products", async (req, res) => {
  try {
    const { data: product } = await axios.post(
      `http://localhost:3001/products/`,
      req.body
    );

    console.log(data);
    // if (!product) {
    //   res.send({
    //     messenger: "Không tìm thấy sản phẩm",
    //   });
    // }
    // return res.json(product);
  } catch (err) {
    res.send({
      messenger: err,
    });
  }
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
