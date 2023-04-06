import dotenv from "dotenv";
import Category from "../models/category.js";
import { categorySchema } from "../schemas/category.js";
dotenv.config();

export const getAll = async (req, res) => {
  try {
    const categories = await Category.find();
    if (categories.length === 0) {
      return res.status(400).json({
        message: "Danh sách danh muc trống!",
        datas: [],
      });
    }
    return res.status(200).json({
      message: "Lay danh sach danh muc thanh cong!",
      datas: [...categories],
    });
  } catch (error) {
    return res.status(500).json({
      message: "Loi server",
      datas: [],
    });
  }
};

export const getDetail = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(400).json({
        message: "Danh muc không tồn tại",
        datas: [],
      });
    }
    return res.status(200).json({
      message: "Tim danh muc thanh cong",
      datas: [category],
    });
  } catch (error) {
    return res.status(500).json({
      message: "Loi server",
      datas: [],
    });
  }
};

export const create = async (req, res) => {
  try {
    const { error } = categorySchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
        datas: [],
      });
    }

    const category = await Category.create(req.body);

    if (!category) {
      return res.status(400).json({
        message: "Thêm danh muc thất bại",
        datas: [],
      });
    }
    return res.status(200).json({
      message: "Thêm danh muc thành công",
      data: [category],
    });
  } catch (error) {
    return res.status(400).json({
      message: "Loi Server",
      datas: [],
    });
  }
};

export const update = async (req, res) => {
  try {
    const { error } = categorySchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
        datas: [],
      });
    }

    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!category) {
      return res.status(400).json({
        messenger: "Cập nhật danh muc thất bại",
      });
    }
    return res.status(200).json({
      message: "Cap nhat danh muc thanh cong",
      datas: [category],
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
      datas: [],
    });
  }
};

export const remove = async (req, res) => {
  try {
    const category = Category.findOneAndDelete(req.params.id);
    if (!category) {
      return res.send({
        message: "Xoá danh muc that bai!",
        datas: [],
      });
    }
    return res.send({
      message: "Xoá thanh cong that bai!",
      datas: [],
    });
  } catch (error) {
    return res.status(500).json({
      message: "Loi server",
      datas: [],
    });
  }
};
