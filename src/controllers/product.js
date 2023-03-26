import Joi from "joi";
import Product from "../models/product.js";

const productSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  description: Joi.string(),
});

export const getAll = async (req, res) => {
  try {
    // const { data: products } = await axios.get(`${API_URI}/products`);
    const products = await Product.find();
    if (products.length === 0) {
      return res.json({
        message: "Không có sản phẩm nào",
      });
    }
    return res.json(products);
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
export const get = async function (req, res) {
  try {
    // const { data: product } = await axios.get(`${API_URI}/products/${req.params.id}`);
    const product = await Product.findById(req.params.id);
    // const product = await Product.findOne({ _id: req.params.id });

    if (!product) {
      return res.json({
        message: "Không có sản phẩm nào",
      });
    }
    return res.json(product);
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
export const create = async function (req, res) {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    // const { data: product } = await axios.post(`${API_URI}/products`, req.body);
    // const kitty = new Cat({ name: "Zildjian" });
    // const myObject = new Object({})
    const product = await Product.create(req.body);
    if (!product) {
      return res.json({
        message: "Thêm sản phẩm không thành công!",
      });
    }
    return res.json({
      message: "Thêm sản phẩm thành công",
      data: product,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
export const updatePatch = async function (req, res) {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    // const { data: product } = await axios.post(`${API_URI}/products`, req.body);
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product) {
      return res.json({
        message: "Cập nhật sản phẩm không thành công",
      });
    }
    return res.json({
      message: "Cập nhật sản phẩm thành công",
      data: product,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};

export const remove = async function (req, res) {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    return res.json({
      message: "Xóa sản phẩm thành công",
      product,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
