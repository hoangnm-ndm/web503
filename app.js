const products = [
  { id: 1, name: "Iphone 12", price: 2000 },
  { id: 2, name: "Iphone 11000", price: 1000 },
];

// Cài đặt nodejs, default đã có rất package hỗ trợ

// cú pháp ES5
// const http = require("http");

// const server = http.createServer((req, res) => {

//     products.push({ name: "Iphone 10", price: 500 });
//     // routing
//     if (req.url == "/") {
//         res.setHeader("Content-Type", "text/html");
//         res.end(`<html>
//                     <body>
//                         <form action="/products" method="post">
//                             <input type="text" name="name" />
//                             <button>Submit</button>
//                         </form>
//                     </body>
//                 </html>`);
//     }
//     if (req.url == "/products" && req.method == "POST") {
//         const body = [];
//         req.on("data", function (chunk) {
//             body.push(chunk);
//         });
//         req.on("end", function () {
//             const bodyParse = Buffer.concat(body).toString();
//             console.log(bodyParse);
//         });
//         res.end(JSON.stringify(products));
//     }
// });
// server.listen(8080, () => {
//     console.log("Server is running on port 8080");
// });

// npm init -y
// npm i nodemon -D
// "start": "nodemon app.js"

import express from "express";

const app = express();

app.use(express.json());

// Trả về danh sách
app.get("/products", (req, res) => {
  res.json(products);
});
// Trả về một sản phẩm
app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find((product) => product.id == id);
  res.json(product);
});
// Thêm sản phẩm
app.post("/products", (req, res) => {
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
app.delete("/products/:id", (req, res) => {
  const id = req.params.id;
  const newProducts = products.filter((item) => item.id != id);
  res.status(200).json({
    message: "Xóa sản phẩm thành công",
    products: newProducts,
  });
});
// Cập nhật sản phẩm

app.patch("/products/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const newProducts = products.map((item) => (item.id == id ? body : item));
  res.status(200).json({
    message: "Cập nhật sản phẩm thành công",
    products: newProducts,
  });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
