import product from "../models/product";
import Joi from "joi";

const productValid = Joi.object({
  name: Joi.string().required().min(6),
  price: Joi.number().required().min(0),
  desc: Joi.string(),
});

export const createProduct = async (req, res) => {
  try {
    const body = req.body;
    if (!body) {
      return res.status(400).json({
        message: "Khong co data",
      });
    }
    const { error } = productValid.validate(body);
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }
    const data = await product.create(body);
    if (!data) {
      return res.status(400).json({
        message: "Them khong thanh cong",
      });
    }

    return res.status(200).json({
      message: "Them thanh cong",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      name: "Loi server",
      message: error.message,
    });
  }
};

export const getAllProduct = async (req, res) => {
  try {
    const data = await product.find();
    if (!data || data.length === 0) {
      return res.status(400).json({
        message: "Lay danh sach san pham that bai",
      });
    }

    return res.status(200).json({
      message: "Lay danh sach san pham thanh cong",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      name: "Loi server",
      message: error.message,
    });
  }
};

export const getDetailProduct = async (req, res) => {
  try {
    const data = await product.findById(req.params.id);
    if (!data) {
      return res.status(400).json({
        message: "Lay san pham that bai",
      });
    }

    return res.status(200).json({
      message: "Lay san pham thanh cong",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      name: "Loi server",
      message: error.message,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const body = req.body;
    if (!body) {
      return res.status(400).json({
        message: "Khong co data",
      });
    }
    const data = await product.findOneAndReplace({ _id: req.params.id }, body, {
      new: true,
    });
    if (!data) {
      return res.status(400).json({
        message: "Cap nhat san pham that bai",
      });
    }

    return res.status(200).json({
      message: "Cap nhat san pham thanh cong",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      name: "Loi server",
      message: error.message,
    });
  }
};

export const removeProduct = async (req, res) => {
  try {
    const data = await product.findByIdAndDelete(req.params.id);
    if (!data) {
      return res.status(400).json({
        message: "Xoa san pham that bai",
      });
    }

    return res.status(200).json({
      message: "Xoa san pham thanh cong",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      name: "Loi server",
      message: error.message,
    });
  }
};
