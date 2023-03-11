import axios from "axios";

export const getAll = async (req, res) => {
  try {
    const { data: products } = await axios.get(
      "http://localhost:3001/products"
    );
    if (products.length === 0) {
      res.status(404).json({
        message: "Không có sản phẩm nào",
      });
    }
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
  // const res = await axios.get("http://localhost:3001/products")
  // const data = await res.data
};
export const get = async (req, res) => {
  try {
    const { data: product } = await axios.get(
      `http://localhost:3001/products/${req.params.id}`
    );
    if (!product) {
      return res.status(404).json({
        message: "Not found",
      });
    }
    return res.status(200).json({
      message: "Product found",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi server",
    });
  }
};
export const create = async (req, res) => {
  try {
    const { data: product } = await axios.post(
      "http://localhost:3001/products",
      req.body
    );
    if (!product) {
      return res.status(400).json({
        message: "Không thể tạo sản phẩm",
      });
    }
    return res.status(201).json({
      message: "Product created",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
export const remove = async (req, res) => {
  try {
    await axios.delete(`http://localhost:3001/products/${req.params.id}`);
    return res.status(200).json({
      message: "Sản phẩm đã được xóa thành công",
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const update = async (req, res) => {
  try {
    const { data: product } = await axios.patch(
      `http://localhost:3001/products/${req.params.id}`,
      req.body
    );
    if (!product) {
      return res.status(404).json({
        message: "Không tìm thấy sản phẩm",
      });
    }
    return res.status(200).json({
      message: "Sản phẩm đã được cập nhật thành công",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
