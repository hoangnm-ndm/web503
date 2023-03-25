import Joi from "joi";
import Product from "../models/product.js";

const productSchema = Joi.object({
  name: Joi.string().required().min(3),
  price: Joi.number().required(),
  description: Joi.string(),
});
export const getAll = async (req, res) => {
  try {
    // const { data: products } = await axios.get(
    //   "http://localhost:3001/products"
    // );
    const products = await Product.find();
    if (products.length === 0) {
      res.send({
        messenger: "Danh sách sản phẩm trống",
      });
    }
    return res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ messenger: err });
  }
};

export const getDetail = async (req, res) => {
  try {
    // const { data: product } = await axios.get(`${API_URI}${req.params.id}`);
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.send({
        messenger: "Không tìm thấy sản phẩm",
      });
    }
    return res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ messenger: err });
  }
};

export const create = async (req, res) => {
  try {
    // const { data: product } = await axios.post(`${API_URI}`, req.body);
    const product = await Product.create(req.body);
    if (!product) {
      res.send({
        messenger: "Thêm sản phẩm không thành công",
      });
    }
    return res.json(product);
  } catch (err) {
    res.status(500).json({ messenger: err });
  }
};

export const remove = async (req, res) => {
  try {
    // await axios.delete(`${API_URI}${req.params.id}`);
    const product = await Product.delete(req.params.id);
    return res.status(200).json({
      message: "Sản phẩm đã được xóa thành công",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const update = async (req, res) => {
  try {
    // const { data: product } = await axios.put(
    //   `${API_URI}${req.params.id}`,
    //   req.body
    // );

    const product = await Product.findByIdAndUpdate(req.params.id, req.body);
    if (!product) {
      res.send({
        messenger: "Update sản phẩm không thành công",
      });
    }
    return res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ messenger: err });
  }
};
