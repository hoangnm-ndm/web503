import Product from "../models/Product";
import { productValidate } from "../validations/productValid";

export const getAllProduct = async (req, res) => {
  try {
    const data = await Product.find();
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
      name: error.name || "Error",
      message: error.message || "Server error!",
    });
  }
};

export const getDetailProduct = async (req, res) => {
  try {
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
      name: error.name || "Error",
      message: error.message || "Server error!",
    });
  }
};

export const removeProduct = async (req, res) => {
  try {
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
      name: error.name || "Error",
      message: error.message || "Server error!",
    });
  }
};

export const createProduct = async (req, res) => {
  try {
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
      name: error.name || "Error",
      message: error.message || "Server error!",
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const data = await Product.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        updatedAt: Date.now(),
      },
      {
        new: true,
      }
    );
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
      name: error.name || "Error",
      message: error.message || "Server error!",
    });
  }
};
