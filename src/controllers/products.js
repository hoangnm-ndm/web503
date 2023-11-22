import Product from "../models/Product";
import Joi from "joi";
const productValid = Joi.object({
  name: Joi.string().required().min(6).max(255),
  price: Joi.number().required().min(0),
  desc: Joi.string().min(6),
});

export const getAllProduct = async (req, res) => {
  try {
    const data = await Product.find();
    if (!data || data.length === 0) {
      return res.status(400).json({
        message: "Khong tim thay san pham nao!",
      });
    }

    return res.status(200).json({
      message: "Lay danh sach san pham thanh cong!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name || "Loi server!",
      message: error.message || "Loi server!",
    });
  }
};

export const getDetailProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Product.findById(id);
    if (!data) {
      return res.status(400).json({
        message: "Khong tim thay san pham nao!",
      });
    }

    return res.status(200).json({
      message: "Lay san pham thanh cong!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name || "Loi server!",
      message: error.message || "Loi server!",
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Product.findByIdAndDelete(id);
    if (!data) {
      return res.status(400).json({
        message: "Xoa that bai!",
      });
    }

    return res.status(200).json({
      message: "Xoa thanh cong!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name || "Loi server!",
      message: error.message || "Loi server!",
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    const body = req.body;

    const { error } = productValid.validate(body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors.join(", "),
      });
    }
    const data = await Product.create(body);
    if (!data) {
      return res.status(400).json({
        message: "Tao moi san pham that bai!",
      });
    }

    return res.status(200).json({
      message: "Tao moi san pham thanh cong!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name || "Loi server!",
      message: error.message || "Loi server!",
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const body = req.body;
    const id = req.params.id;

    const { error } = productValid.validate(body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors.join(", "),
      });
    }

    const data = await Product.findOneAndReplace({ _id: id }, body, {
      new: true,
    });
    if (!data) {
      return res.status(400).json({ message: "Cap nhat san pham that bai!" });
    }

    return res.status(200).json({
      message: "Cap nhat san pham thanh cong!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name || "Loi server!",
      message: error.message || "Loi server!",
    });
  }
};
