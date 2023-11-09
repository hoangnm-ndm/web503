import axios from "axios";
import express from "express"; // module syntax
const app = express();
const port = 8000;

app.use(express.json());

app.get("/products", async (req, res) => {
  try {
    const { data } = await axios.get("http://localhost:3000/products");
    if (!data || !data.length) {
      return res.status(404).json({
        message: "Khong co san pham nao!",
        data: [],
      });
    }
    return res.status(200).json({
      message: "Lay danh sach san pham thanh cong!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { data } = await axios.get(`http://localhost:3000/products/${id}`);
    if (!data) {
      return res.status(404).json({
        message: "San pham khong ton tai!",
      });
    }
    return res.status(200).json({
      message: "Lay san pham thanh cong!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
});

app.post("/products", async (req, res) => {
  try {
    const body = req.body;
    const { data } = await axios.post("http://localhost:3000/products", body);
    if (!data) {
      return res.status(404).json({
        message: "Them san pham khong thanh cong!",
      });
    }
    return res.status(200).json({
      message: "Them san pham thanh cong!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
});

app.put("/products/:id", async (req, res) => {
  try {
    const body = req.body;
    const id = req.params.id;
    const { data } = await axios.post(
      `http://localhost:3000/products/${id}`,
      body
    );
    if (!data) {
      return res.status(404).json({
        message: "Cap nhat san pham khong thanh cong!",
      });
    }
    return res.status(200).json({
      message: "Cap nhat san pham thanh cong!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
});

app.delete("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await axios.post(`http://localhost:3000/products/${id}`);
    return res.status(200).json({
      message: "Da xoa san pham!",
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
