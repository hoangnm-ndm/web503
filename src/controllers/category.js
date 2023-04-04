import Category from "../models/category.js";
import categorySchema from "../schemas/category";

export const getAll = async (req, res) => {
  try {
    const categorys = await Category.find();
    if (categorys.length === 0) {
      return res.json({
        message: "Không có category nào",
      });
    }
    return res.json(categorys);
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
export const get = async function (req, res) {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.json({
        message: "Không có category nào",
      });
    }
    return res.json(category);
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
export const create = async function (req, res) {
  try {
    const { error } = categorySchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    const category = await Category.create(req.body);
    if (!category) {
      return res.json({
        message: "Thêm category không thành công!",
      });
    }
    return res.json({
      message: "Thêm category thành công",
      data: category,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
export const updatePatch = async function (req, res) {
  try {
    const { error } = categorySchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!category) {
      return res.json({
        message: "Cập nhật category không thành công",
      });
    }
    return res.json({
      message: "Cập nhật category thành công",
      data: category,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
export const remove = async function (req, res) {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    return res.json({
      message: "Xóa category thành công",
      category,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
