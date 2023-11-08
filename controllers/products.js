import axios from "axios";

export const getAllProduct = async (req, res) => {
  try {
    const { data } = await axios.get("http://localhost:3000/products");

    if (!data || data.length === 0) {
      // Tạo ra một ngoại lệ để hứng lỗi
      throw new Error("Loi khi truy cap danh sach san pham");
    }

    return res.status(200).json({
      message: "Lay danh sach san pham thanh cong!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Loi server",
    });
  }
};

export const getDetailProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const { data } = await axios.get(`http://localhost:3000/products/${id}`);
    console.log(data);
    if (!data) {
      // Tạo ra một ngoại lệ để hứng lỗi
      throw new Error("Loi khi truy cap danh sach san pham");
    }

    return res.status(200).json({
      message: "OK!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "False",
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const { data } = await axios.delete(`http://localhost:3000/products/${id}`);
    console.log(data);
    if (!data) {
      // Tạo ra một ngoại lệ để hứng lỗi
      throw new Error("Error");
    }

    return res.status(200).json({
      message: "OK!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "False",
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    const body = req.body;
    const { data } = await axios.post(`http://localhost:3000/products`, body);
    console.log(data);
    if (!data) {
      // Tạo ra một ngoại lệ để hứng lỗi
      throw new Error("Error");
    }

    return res.status(200).json({
      message: "OK!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "False",
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const body = req.body;
    const id = req.params.id;
    const { data } = await axios.put(
      `http://localhost:3000/products/${id}`,
      body
    );
    console.log(data);
    if (!data) {
      // Tạo ra một ngoại lệ để hứng lỗi
      throw new Error("Error");
    }

    return res.status(200).json({
      message: "OK!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "False",
    });
  }
};
