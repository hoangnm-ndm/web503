import express from "express";
import routerProduct from "./routes/product.js";
const app = express();
const port = 8000;

app.use(express.json());

app.use("/api", routerProduct);
// app.use((req, res, next) => {
//   console.log("middleware");
//   next();
// });
/**
 * app.use có thể định nghĩa router cho tất cả các phương thức: get, put, post, delete..
 * app.use được sử dụng như một middleware
 */

// GET LIST
// app.get("/products", async (req, res) => {
//   try {
//     const { data: products } = await axios.get(
//       "http://localhost:3001/products"
//     );
//     if (products.length === 0) {
//       res.send({
//         messenger: "Danh sách sản phẩm trống",
//       });
//     }
//     return res.status(200).json(products);
//   } catch (err) {
//     res.status(500).json({ messenger: err });
//   }
// });

// GET DETAIL
// app.get("/products/:id", async (req, res) => {
//   try {
//     const { data: product } = await axios.get(
//       `http://localhost:3001/products/${req.params.id}`
//     );
//     if (!product) {
//       res.send({
//         messenger: "Không tìm thấy sản phẩm",
//       });
//     }
//     return res.status(200).json(product);
//   } catch (err) {
//     res.status(500).json({ messenger: err });
//   }
// });

// CREATE
// app.post("/product", (req, res) => {
//   products.push(req.body);
//   res.status(201).send({
//     messenger: "Them san pham thanh cong",
//     data: products,
//   });
// });

// app.post("/products", async (req, res) => {
//   try {
//     const { data: product } = await axios.post(
//       `http://localhost:3001/products/`,
//       req.body
//     );
//     if (!product) {
//       res.send({
//         messenger: "Thêm sản phẩm không thành công",
//       });
//     }
//     return res.json(product);
//   } catch (err) {
//     res.status(500).json({ messenger: err });
//   }
// });

//UPDATE
// app.put("/product/:id", (req, res) => {
//   const id = req.params.id;
//   const newProducts = products.filter((item) =>
//     item.id == id ? req.body : item
//   );
//   res.send({
//     messenger: "Thay doi thong tin san pham thanh cong",
//     data: newProducts,
//   });
// });

// app.put("/product/:id", async (req, res) => {
//   try {
//     const { data: product } = await axios.put(
//       `http://localhost:3001/${req.params.id}`,
//       req.body
//     );
//     if (!product) {
//       res.send({
//         messenger: "Update sản phẩm không thành công",
//       });
//     }
//     return res.status(200).json(product);
//   } catch (err) {
//     res.status(500).json({ messenger: err });
//   }
// });

// DELETE
// app.delete("product/:id", (req, res) => {
//   const id = req.params.id;
//   const newProducts = products.filter((item) => item.id != id);
//   res.send({
//     messenger: "Xoa san pham thanh cong",
//     data: newProducts,
//   });
// });
// app.listen(port, () => {
//   console.log(`ung dung dang chay vao file app tren port: ${port}`);
// });

// app.delete("/product/:id", async (req, res) => {
//   try {
//     await axios.delete(`http://localhost:3001/products/${req.params.id}`);
//     return res.status(200).json({
//       message: "Sản phẩm đã được xóa thành công",
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: error,
//     });
//   }
// });

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

// Step 1: tạo file db.json
// Step 2: cài đặt json-server.
// Step 3: cài đặt concurrently
// Step 4: config lại package.json
// Step 5: install axios
// Step 6: Code getlist, getdetails
