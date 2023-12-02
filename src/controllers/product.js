import Product from "../models/Product";
import category from "../models/category";

export const getAllProduct = async (req, res) => {
  try {
    const data = await Product.find();
    if (!data || !data.length) {
      return res.status(404).json({
        message: "Khong co san pham nao!",
        data: [],
      });
    }
    return res.status(200).json({
      message: "Lay danh sach san pham thanh cong!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name || "Error",
      message: error.message || "Server error!",
    });
  }
};

export const getDetailProduct = async (req, res) => {
  try {
    const data = await Product.findById(req.params.id);
    if (!data) {
      return res.status(404).json({
        message: "Not found!",
        data: [],
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

export const removeProduct = async (req, res) => {
  try {
    const data = await Product.findByIdAndDelete(req.params.id);
    if (!data) {
      return res.status(404).json({
        message: "Remove failed!",
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

export const createProduct = async (req, res) => {
  try {
    const data = await Product.create(req.body);
    if (!data) {
      return res.status(400).json({
        message: "Create failed!",
      });
    }
    if (!data.categoryID) {
      const updateCategory = await category.findByIdAndUpdate(
        "656b1bdc0d50ee8e7c6e0468",
        {
          $push: {
            products: data._id,
            // push Id của sản phẩm vừa được tạo mới vào danh mục tương ứng.
          },
        },
        { new: true }
      );

      // "656b1bdc0d50ee8e7c6e0468": là id của danh mục mặc đinh (other)
    }
    const updateCategory = await category.findByIdAndUpdate(
      data.categoryID,
      {
        $push: {
          products: data._id,
          // push Id của sản phẩm vừa được tạo mới vào danh mục tương ứng.
        },
      },
      { new: true }
    );
    console.log(updateCategory);
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

export const updateProduct = async (req, res) => {
  try {
    const data = await Product.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        updatedAt: Date.now(),
      },
      {
        new: true,
      }
    );
    if (!data) {
      return res.status(400).json({
        message: "Update failed!",
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
