import axios from "axios";
import Product from "../models/Product";

export const getAllProduct = async (req, res) => {
  try {
    // const { data } = await axios.get("http://localhost:3000/products");
    const data = await Product.find();
    console.log(data);
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
};

export const getDetailProduct = async (req, res) => {
  try {
    // const { data } = await axios.get(
    //   `http://localhost:3000/products/${req.params.id}`
    // );
    const data = await Product.findById(req.params.id);
    if (!data) {
      return res.status(404).json({
        message: "Not found!",
        data: [],
      });
    }
    return res.status(200).json({
      message: "Successfully!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};

export const removeProduct = async (req, res) => {
  try {
    // const { status } = await axios.delete(
    //   `http://localhost:3000/products/${req.params.id}`
    // );

    const data = await Product.findByIdAndDelete(req.params.id);
    if (!data) {
      return res.status(404).json({
        message: "Remove failed!",
      });
    }
    return res.status(200).json({
      message: "Successfully!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    // const { data } = await axios.post(
    //   `http://localhost:3000/products`,
    //   req.body
    // );

    if (!req.body) {
      throw new Error("Body is required!");
    }

    const data = await Product.create(req.body);

    if (!data) {
      return res.status(400).json({
        message: "Create failed!",
      });
    }
    return res.status(200).json({
      message: "Successfully!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    // const { data } = await axios.put(
    //   `http://localhost:3000/products/${req.params.id}`,
    //   req.body
    // );
    const data = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!data) {
      return res.status(400).json({
        message: "Update failed!",
      });
    }
    return res.status(200).json({
      message: "Successfully!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};
