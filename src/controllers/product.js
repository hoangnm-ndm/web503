import dotenv from "dotenv";
import Product from "../models/product.js";
import { productSchema } from "../schemas/product";
dotenv.config();

export const getAll = async (req, res) => {
  try {
    const products = await Product.find();
    if (products.length === 0) {
      res.send({
        messenger: "Danh sách sản phẩm trống!",
      });
    }
    return res.status(200).json(products);
  } catch (error) {
    res.status(500).send({
      messenger: error,
    });
  }
};

export const getDetail = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.send({
        messenger: "Sản phẩm không tồn tại",
      });
    }
    return res.status(200).json(product);
  } catch (error) {
    res.status(500).send({
      messenger: error,
    });
  }
};

export const create = async (req, res) => {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
        datas: [],
      });
    }

    const product = await Product.create(req.body);

    if (!product) {
      return res.status(400).json({
        message: "Thêm sản phẩm thất bại",
        datas: [],
      });
    }
    return res.status(200).json({
      message: "Thêm sản phẩm thành công",
      data: [product],
    });
  } catch (error) {
    return res.status(400).json({
      message: "Loi server",
      datas: [],
    });
  }
};

export const update = async (req, res) => {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
        datas: [],
      });
    }

    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product) {
      return res.send({
        messenger: "Cập nhật sản phẩm thất bại",
        datas: [],
      });
    }
    return res.status(200).json({
      message: "Cap nhat san pham thanh cong!",
      datas: [product],
    });
  } catch (error) {
    return res.status(500).send({
      message: "Loi server",
      datas: [],
    });
  }
};

export const remove = async (req, res) => {
  try {
    const product = Product.findOneAndDelete(req.params.id);
    if (product) {
      return res.status(200).json({
        message: "Xoá sản phẩm thành công!",
        datas: [],
      });
    }
  } catch (error) {
    return res.status(200).json({
      message: "Loi server",
      datas: [],
    });
  }
};
