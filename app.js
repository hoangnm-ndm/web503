import express from "express";
const app = express();
const port = 8000;
import routerProduct from "./routes/product.js";

app.use(express.json());

app.use("/api", routerProduct);

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

// app.get("/products", async (req, res) => {
//   try {
//     const { data: products } = await axios.get(
//       "http://localhost:3001/products"
//     );
//     if (products.length === 0) {
//       res.send({
//         messenger: "Danh sách sản phẩm trống!",
//       });
//     }
//     return res.status(200).json(products);
//   } catch (error) {
//     res.status(500).send({
//       messenger: error,
//     });
//   }
// });

// app.get("/product/:id", async (req, res) => {
//   try {
//     const { data: product } = await axios.get(
//       `http://localhost:3001/products/${req.params.id}`
//     );
//     if (!product) {
//       res.send({
//         messenger: "Sản phẩm không tồn tại",
//       });
//     }
//     return res.status(200).json(product);
//   } catch (error) {
//     res.status(500).send({
//       messenger: error,
//     });
//   }
// });

// app.post("/product/", async (req, res) => {
//   try {
//     const { data: product } = await axios.post(
//       `http://localhost:3001/products/`,
//       req.body
//     );
//     if (!product) {
//       res.send({
//         messenger: "Thêm sản phẩm thất bại",
//       });
//     }
//     return res.status(200).json(product);
//   } catch (error) {
//     res.status(500).send({
//       messenger: error,
//     });
//   }
// });

// app.put("/product/:id", async (req, res) => {
//   try {
//     const { data: product } = await axios.put(
//       `http://localhost:3001/products/${req.params.id}`,
//       req.body
//     );
//     if (!product) {
//       res.send({
//         messenger: "Cập nhật sản phẩm thất bại",
//       });
//     }
//     return res.status(200).json(product);
//   } catch (error) {
//     res.status(500).send({
//       messenger: error,
//     });
//   }
// });

// app.delete("/product/:id", async (req, res) => {
//   try {
//     await axios.delete(`http://localhost:3001/products/${req.params.id}`);
//     return res.send({
//       messenger: "Xoá sản phẩm thành công!",
//     });
//   } catch (error) {
//     res.send({
//       messenger: error,
//     });
//   }
// });

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

/**
 * Step 1: install json-server
 * Step 2: install concurrently
 * Step 3: install axios
 * Step 4: edit package.json
 * Step 5: setting "type": "module" in package.json
 * Step 6: Add method getAll, getDetail, post, put, delete
 */
