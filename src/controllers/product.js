import dotenv from "dotenv";
import Joi from "joi";
import Product from "../models/product.js";

dotenv.config();
const productSchema = Joi.object({
  name: Joi.string().required().min(6),
  price: Joi.number().required(),
  description: Joi.string(),
});
export const getAll = async (req, res) => {
  try {
    // const { data: products } = await axios.get(
    //   `${process.env.API_URI}/products`
    // );

    const products = await Product.find();
    if (products.length === 0) {
      res.send({
        messenger: "Danh sách sản phẩm trống!",
      });
    }
    return res.status(200).json(products);
  } catch (error) {
    res.status(500).send({
      messenger: error,
    });
  }
};

export const getDetail = async (req, res) => {
  try {
    // const { data: product } = await axios.get(
    //   `${process.env.API_URI}/${req.params.id}`
    // );

    const product = await Product.findById(req.params.id);
    if (!product) {
      res.send({
        messenger: "Sản phẩm không tồn tại",
      });
    }
    return res.status(200).json(product);
  } catch (error) {
    res.status(500).send({
      messenger: error,
    });
  }
};

export const create = async (req, res) => {
  try {
    // const { data: product } = await axios.post(
    //   `${process.env.API_URI}/products/`,
    //   req.body
    // );

    const { error } = productSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }

    const product = await Product.create(req.body);

    if (!product) {
      res.send({
        messenger: "Thêm sản phẩm thất bại",
      });
    }
    return res.status(200).json({
      message: "Thêm sản phẩm thành công",
      data: product,
    });
  } catch (error) {
    res.status(400).send({
      messenger: error,
    });
  }
};

export const update = async (req, res) => {
  try {
    // const { data: product } = await axios.put(
    //   `${process.env.API_URI}/products/${req.params.id}`,
    //   req.body
    // );

    const { error } = productSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }

    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product) {
      res.send({
        messenger: "Cập nhật sản phẩm thất bại",
      });
    }
    return res.status(200).json(product);
  } catch (error) {
    res.status(500).send({
      messenger: error,
    });
  }
};

export const remove = async (req, res) => {
  try {
    // await axios.delete(`${process.env.API_URI}/products/${req.params.id}`);
    const product = Product.findOneAndDelete(req.params.id);
    if (product) {
      return res.send({
        messenger: "Xoá sản phẩm thành công!",
      });
    }
  } catch (error) {
    res.send({
      messenger: error,
    });
  }
};
