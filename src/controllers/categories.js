import Category from "../models/Category.js";

export const createCategory = async (req, res) => {
  try {
    const data = await Category.create(req.body);
    if (!data) {
      return res.status(400).json({
        message: "Tao moi danh muc that bai!",
      });
    }
    return res.status(200).json({
      message: "Tao moi danh muc thanh cong!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const data = await Category.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!data) {
      return res.status(400).json({
        message: "Cap nhat danh muc that bai!",
      });
    }
    return res.status(200).json({
      message: "Cap nhat danh muc thanh cong!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};

export const getAllCategory = async (req, res) => {
  try {
    const data = await Category.find();
    if (!data || data.length === 0) {
      return res.status(400).json({
        message: "Lay danh sach danh muc that bai!",
      });
    }
    return res.status(200).json({
      message: "Lay danh sach danh muc thanh cong!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};

export const getOneCategoryById = async (req, res) => {
  try {
    const data = await Category.findById(req.params.id);
    if (!data) {
      return res.status(400).json({
        message: "Lay danh muc that bai!",
      });
    }
    return res.status(200).json({
      message: "Lay danh muc thanh cong!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};

export const getOneCategoryBySlug = async (req, res) => {
  try {
    const data = await Category.findOne({ slug: req.params.slug });
    if (!data) {
      return res.status(400).json({
        message: "Lay danh muc that bai!",
      });
    }
    return res.status(200).json({
      message: "Lay danh muc thanh cong!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};

export const getOneCategoryByName = async (req, res) => {
  try {
    const data = await Category.findOne({ name: req.params.name });
    if (!data) {
      return res.status(400).json({
        message: "Lay danh muc that bai!",
      });
    }
    return res.status(200).json({
      message: "Lay danh muc thanh cong!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};

export const removeCategory = async (req, res) => {
  try {
    const data = await Category.findByIdAndDelete(req.params.id);
    if (!data) {
      return res.status(400).json({
        message: "Xoa danh muc that bai!",
      });
    }
    return res.status(200).json({
      message: "Xoa danh muc thanh cong!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};
