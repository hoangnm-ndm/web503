import axios from "axios";
import express from "express";
const app = express();

app.get("/products", async (req, res) => {
  try {
    const { data } = await axios.get(`http://localhost:3000/products`);
    if (!data) {
      return res.status(404).json({
        message: "Không tìm thấy sản phẩm",
      });
    }

    return res.status(200).json({
      message: "Gọi danh sách sản phẩm thành công!",
      datas: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

// app.get("/products/:id", (req, res) => {
//   const id = req.params.id;
//   const product = products.find((item) => item.id === id);
//   if (!product) {
//     res.status(404).json({
//       message: "Không tìm thấy sản phẩm",
//     });
//   }
//   res.status(200).json({
//     message: "Gọi chi tiết sản phẩm thành công!",
//     datas: product,
//   });
// });
// app.delete("/products/:id", (req, res) => {
//   const id = req.params.id;
//   const product = products.find((item) => item.id === id);
//   if (!product) {
//     res.status(404).json({
//       message: "Không tìm thấy sản phẩm",
//     });
//   }
//   const newProduct = products.filter((item) => item.id !== id);
//   res.status(200).json({
//     message: "Xoá sản phẩm thành công!",
//     product: product,
//     newProduct,
//   });
// });
// Thêm mới sản phẩm
app.post(`/products`, (req, res) => {});

//Cập nhật sản phẩm
app.put(`/products/:id`, (req, res) => {});

app.listen(8088, () => {
  console.log("Server is running on port 8088");
});

// Bước 1: npm init
// Bước 2: cd folder -> tạo file app.js
// Bước 3: Thêm "type": "module" trong package.json
// Bước 4: Refactor dự án
