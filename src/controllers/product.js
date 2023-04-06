import dotenv from "dotenv";
import Product from "../models/product.js";
import Category from "../models/category";
import { productSchema } from "../schemas/product";
dotenv.config();

export const getAll = async (req, res) => {
  try {
    const products = await Product.find().populate("categoryId");
    if (products.length === 0) {
      return res.status(400).json({
        message: "Danh sách sản phẩm trống!",
        datas: [],
      });
    }
    return res.status(200).json({
      message: "Lay danh sach san pham thanh cong",
      datas: [...products],
    });
  } catch (error) {
    res.status(500).send({
      messenger: error,
    });
  }
};

export const get = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate(
      "categoryId"
    );
    if (!product) {
      return res.status(400).json({
        message: "Sản phẩm không tồn tại",
        datas: [],
      });
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({
      message: "Loi server",
      datas: [],
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
    await Category.findByIdAndUpdate(product.categoryId, {
      $addToSet: {
        products: product._id,
      },
    });
    // { $addToSet: { <field1>: <value1>, ... } }

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
      return res.status(400).json({
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
