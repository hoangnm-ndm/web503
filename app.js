import axios from "axios";
import express from "express";
const app = express();

app.use(express.json());

app.get("/products", async (req, res) => {
  try {
    const { data } = await axios.get(`http://localhost:3000/products`);
    if (!data) {
      return res.status(404).json({
        message: "Không tìm thấy sản phẩm",
      });
    }
    return res.status(200).json({
      message: "Hiển thị danh sách sản phẩm thành công!",
      datas: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const datas = await axios.get(`http://localhost:3000/products/${id}`);
    if (!datas || datas.status !== 200) {
      return res.status(404).json({
        message: "Không tìm thấy sản phẩm",
      });
    }
    const { data } = datas;
    return res.status(200).json({
      message: "Hiển thị chi tiết sản phẩm thành công!",
      datas: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

app.put("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const { data } = await axios.put(
      `http://localhost:3000/products/${id}`,
      body
    );
    if (!data) {
      return res.status(404).json({
        message: "Cập nhật sản phẩm thất bại!",
      });
    }
    return res.status(200).json({
      message: "Cập nhật sản phẩm thành công!",
      datas: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

app.post("/products", async (req, res) => {
  try {
    const body = req.body;
    const { data } = await axios.post(`http://localhost:3000/products`, body);
    if (!data) {
      return res.status(404).json({
        message: "Thêm mới sản phẩm thất bại!",
      });
    }
    return res.status(200).json({
      message: "Thêm mới sản phẩm thành công!",
      datas: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

app.delete("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { status } = await axios.delete(
      `http://localhost:3000/products/${id}`
    );
    if (!status || status !== 200) {
      return res.status(404).json({
        message: "Xoá sản phẩm thất bại!",
      });
    }
    return res.status(200).json({
      message: "Xoá sản phẩm thành công!",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

app.listen(8088, () => {
  console.log("Server is running on port 8088");
});
