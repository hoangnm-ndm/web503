const { application } = require("express");
const express = require("express");
const app = express();
const port = 8000;

const products = [
  { id: 1, name: "laptop dell vostro", price: 2000 },
  { id: 2, name: "laptop acer", price: 3000 },
  { id: 3, name: "laptop hp vostro", price: 1000 },
];

app.use(express.json()); // JSON.stringify()

app.use((req, res, next) => {
  // middleware
  next();
});

// app.use chỉ quan tâm đến router, không quan tâm đến method
// app.get("/products", (req, res) => {
//   // code lai noi dung ben server.js
//   res.send(products);
// });

// GET, POST, PUT, DELETE, PATH đều phải đúng cả về router và method

app.get("/product/:id", (req, res) => {
  // req.params
  // req.query
  // req.body

  const id = req.params.id;
  const product = products.find((item) => item.id == id);
  res.send(product);
});

app.post("/product/create", (req, res) => {
  // console.log(req.body);
  products.push(req.body);
  res.send(products);
});

app.listen(port, () => {
  console.log(`ung dung dang chay vao file app tren port: ${port}`);
});
