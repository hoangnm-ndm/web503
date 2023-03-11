import express from "express";
import axios from "axios";
const app = express();
const port = 8000;

app.use(express.json());

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

// app.get("/product/:id", (req, res) => {
//   const id = req.params.id;
//   const product = products.find((item) => item.id == id);
//   res.status(200).send({
//     messenger: `Hiển thị sản phẩm ${product?.name}`,
//     data: product,
//   });
// });

app.get("/products", async (req, res) => {
  try {
    const { data: products } = await axios.get(
      "http://localhost:3000/products"
    );
    if (products.length === 0) {
      res.send({
        messenger: "Danh sách sản phẩm trống!",
      });
    }
    return res.status(200).json(products);
  } catch (error) {
    res.status(500).send({
      messenger: error,
    });
  }
});

app.get("/product/:id", async (req, res) => {
  try {
    const { data: product } = await axios.get(
      `http://localhost:3001/products/${req.params.id}`
    );
    if (!product) {
      res.send({
        messenger: "Sản phẩm không tồn tại",
      });
    }
    return res.status(200).json(product);
  } catch (error) {
    res.send({
      messenger: error,
    });
  }
});

// app.post("/product/create", (req, res) => {
//   // console.log(req.body);
//   products.push(req.body);
//   // const newProducts = [...products, ...req.body];
//   res.status(201).send({
//     messenger: "Tạo mới sản phẩm thành công",
//     datas: products,
//   });
// });

// app.put("/product/:id", (req, res) => {
//   const id = req.params.id;
//   const newProducts = products.map((item) => (item.id == id ? req.body : item));
//   res.send({
//     messenger: "Update san pham thanh cong!",
//     data: newProducts,
//   });
// });

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
