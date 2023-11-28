import Category from "../models/Category";
import { categoryValid } from "../validations/categorryValid";

export const getAllCategories = async (req, res) => {
  try {
    const data = await Category.find({}).populate("products");
    if (!data || data.length === 0)
      return res.status(404).json({
        message: "Not found!",
      });
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

export const createCategory = async (req, res) => {
  try {
    const { error } = categoryValid.validate(req.body, { abortEarly: false });

    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }

    // Kiem tra xem category da ton tai chua

    const checkCategoryName = await Category.findOne({ name: req.body.name });
    const checkCategorySlug = await Category.findOne({ slug: req.body.slug });

    if (checkCategoryName || checkCategorySlug) {
      return res.status(400).json({
        message: "Category already exists!",
      });
    }

    const data = await Category.create(req.body);
    if (!data) {
      return res.status(400).json({
        message: "Create category failed!",
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

export const updateCategory = async (req, res) => {
  try {
    const { error } = categoryValid.validate(req.body, { abortEarly: false });

    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }

    const data = await Category.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!data) {
      return res.status(400).json({
        message: "Create category failed!",
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

export const removeCategory = async (req, res) => {
  try {
    const data = await Category.findByIdAndDelete(req.params.id);
    if (!data) {
      return res.status(400).json({
        message: "Remove category failed!",
      });
    }

    return res.status(200).json({
      message: "Remove successfully!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name || "Error",
      message: error.message || "Server error!",
    });
  }
};

export const getOneCategoryById = async (req, res) => {
  try {
    const data = await Category.findById(req.params.id);
    if (!data) {
      return res.status(400).json({
        message: "Get category failed!",
      });
    }

    return res.status(200).json({
      message: "Get successfully!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name || "Error",
      message: error.message || "Server error!",
    });
  }
};

export const getOneCategoryBySlug = async (req, res) => {
  try {
    const data = await Category.findOne({ slug: req.params.slug });
    if (!data) {
      return res.status(400).json({
        message: "Get category failed!",
      });
    }

    return res.status(200).json({
      message: "Get successfully!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name || "Error",
      message: error.message || "Server error!",
    });
  }
};

export const getOneCategoryByName = async (req, res) => {
  try {
    const data = await Category.findOne({ name: req.params.name });
    if (!data) {
      return res.status(400).json({
        message: "Get category failed!",
      });
    }

    return res.status(200).json({
      message: "Get successfully!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name || "Error",
      message: error.message || "Server error!",
    });
  }
};
