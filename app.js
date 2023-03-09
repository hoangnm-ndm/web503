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
  res.status(200).send({
    messenger: `Hiển thị sản phẩm ${product?.name}`,
    data: product,
  });
});

// app.get("/product/form", (req, res) => {
//   res.setHeader("content-type", "text/plain");
//   res.type("txt");
//   res.send(
//     `
//     <form action="/product/create" method="POST">
//       <label for="">Tên sản phẩm</label>
//       <input type="text" placeholder="Tên sản phẩm" />
//       <br />
//       <label for="">Giá sản phẩm</label>
//       <input type="text" placeholder="Giá sản phẩm" />
//       <br />
//       <input type="submit" value="Gửi đi" />
//     </form>
//   `
//   );
// });

app.post("/product/create", (req, res) => {
  // console.log(req.body);
  products.push(req.body);
  // const newProducts = [...products, ...req.body];
  res.status(201).send({
    messenger: "Tạo mới sản phẩm thành công",
    datas: products,
  });
});

app.put("/product/:id", (req, res) => {
  const id = req.params.id;
  const newProducts = products.map((item) => (item.id == id ? req.body : item));
  res.send({
    messenger: "Update san pham thanh cong!",
    data: newProducts,
  });
});

app.listen(port, () => {
  console.log(`ung dung dang chay vao file app tren port: ${port}`);
});
