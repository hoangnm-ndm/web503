import Product from "../models/product.js";
import productSchema from "../schemas/product";
import Category from "../models/category";

export const getAll = async (req, res) => {
  try {
    const products = await Product.find().populate("categoryId");
    if (products.length === 0) {
      return res.json({
        message: "Không có sản phẩm nào",
      });
    }
    return res.status(200).json({
      message: "Lay danh sach san pham thanh cong!",
      datas: [...products],
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
export const get = async function (req, res) {
  try {
    const product = await Product.findById(req.params.id).populate(
      "categoryId"
    );

    if (!product) {
      return res.json({
        message: "Không có sản phẩm nào",
        datas: [],
      });
    }
    return res.status(200).json({
      message: "Lay san pham thanh cong!",
      datas: [product],
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
      datas: [],
    });
  }
};
export const create = async function (req, res) {
  try {
    const { error } = productSchema.validate(req.body);

    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
        datas: [],
      });
    }
    const product = await Product.create(req.body);
    const addCate = await Category.findByIdAndUpdate(product.categoryId, {
      $addToSet: { products: product._id },
    });
    if (!addCate) {
      return res.status(400).json({
        message: "Them danh muc cho san pham khong thanh cong!",
        datas: [],
      });
    }
    if (!product) {
      return res.json({
        message: "Thêm sản phẩm không thành công!",
        datas: [],
      });
    }
    return res.status(200).json({
      message: "Thêm sản phẩm thành công",
      datas: [product],
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
      datas: [],
    });
  }
};
export const updatePatch = async function (req, res) {
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
        message: "Cập nhật sản phẩm không thành công",
        datas: [],
      });
    }
    return res.status(200).json({
      message: "Cập nhật sản phẩm thành công",
      datas: [product],
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
      datas: [],
    });
  }
};
export const remove = async function (req, res) {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    return res.json({
      message: "Xóa sản phẩm thành công",
      datas: [product],
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
      datas: [],
    });
  }
};
