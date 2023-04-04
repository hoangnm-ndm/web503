import Category from "../models/category.js";
import categorySchema from "../schemas/category";

export const getAll = async (req, res) => {
  try {
    const categories = await Category.find();
    if (categories.length === 0) {
      res.status(404).json({
        message: "Không có category nào",
      });
    }
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
export const get = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({
        message: "Not found",
      });
    }
    return res.status(200).json({
      message: "Tìm danh mục sản phẩm thành công!",
      data: category,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi server",
    });
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
        message: "Không thể tạo category",
      });
    }
    return res.status(201).json({
      message: "Thêm category thành công",
      data: category,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
export const remove = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      message: "Category đã được xóa thành công",
      category,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const update = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!category) {
      return res.status(404).json({
        message: "Không tìm thấy category",
      });
    }
    return res.status(200).json({
      message: "Category đã được cập nhật thành công",
      data: category,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
