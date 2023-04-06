import Category from "../models/category.js";
import { categorySchema } from "../schemas/category.js";

export const getAll = async (req, res) => {
  try {
    const categories = await Category.find();
    if (categories.length === 0) {
      return res.status(400).json({
        messenger: "Danh sách category trống",
        datas: [],
      });
    }
    return res.status(200).json({
      message: "Lay danh sach danh muc thanh cong!",
      datas: categories,
    });
  } catch (err) {
    return res.status(500).json({ message: "Loi server" });
  }
};

export const getDetail = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(400).json({
        messenger: "Không tìm thấy category",
        datas: [],
      });
    }
    return res.status(200).json({
      message: "Tim danh muc san pham thanh cong!",
      datas: [category],
    });
  } catch (err) {
    return res.status(500).json({ message: "Loi server", datas: [] });
  }
};

export const create = async (req, res) => {
  try {
    const { error } = categorySchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    const category = await Category.create(req.body);
    if (!category) {
      return res.status(400).json({
        messenger: "Thêm category không thành công",
      });
    }
    return res.status(200).json({
      message: "Them danh muc san pham thanh cong!",
      datas: [],
    });
  } catch (err) {
    return res.status(500).json({ message: "Loi server", datas: [] });
  }
};

export const remove = async (req, res) => {
  try {
    const category = await Category.delete(req.params.id);
    if (!category) {
      return res.status(400).json({
        message: "Xoa category khong thanh cong!",
        datas: [],
      });
    }
    return res.status(200).json({
      message: "Category đã được xóa thành công",
      datas: [category],
    });
  } catch (error) {
    return res.status(500).json({
      message: "Loi server",
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
      });
    }
    const category = await Category.findByIdAndUpdate(req.params.id, req.body);
    if (!category) {
      return res.status(400).json({
        messenger: "Update category không thành công",
      });
    }
    return res.status(200).json({
      message: "Update category thanh cong!",
      datas: [category],
    });
  } catch (err) {
    return res.status(500).json({ message: "Loi server" });
  }
};
