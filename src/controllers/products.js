import axios from "axios";
import dotenv from "dotenv";
import { productValidator } from "../validations/products";
import product from "../models/product";
dotenv.config();

const { API_URL } = process.env;

export const getAll = async (req, res) => {
  try {
    // const { data } = await axios.get(`${API_URL}/products`);
    const data = await product.find();
    console.log(data);
    if (!data || data.length === 0) {
      return res.status(404).json({
        message: "Không tìm thấy sản phẩm",
      });
    }
    return res.status(200).json({
      message: "Hiển thị danh sách sản phẩm thành công!",
      datas: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getDetail = async (req, res) => {
  try {
    const id = req.params.id;
    // const { data } = await axios.get(`${API_URL}/products/${id}`);
    const data = await product.findById(id);
    if (!data) {
      return res.status(404).json({
        message: "Không tìm thấy sản phẩm",
      });
    }
    return res.status(200).json({
      message: "Hiển thị chi tiết sản phẩm thành công!",
      datas: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const create = async (req, res) => {
  try {
    const body = req.body;
    const { error } = productValidator.validate(body);
    if (error && error.details[0].message) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    // const { data } = await axios.post(`${API_URL}/products`, body);
    const data = await product.create(body);
    if (!data) {
      return res.status(404).json({
        message: "Thêm mới sản phẩm không thành công",
      });
    }
    return res.status(200).json({
      message: "Thêm mới sản phẩm thành công!",
      datas: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const { error } = productValidator.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message || "Please re-check your product",
      });
    }
    const { data } = await axios.put(`${API_URL}/products/${id}`, body);
    if (!data) {
      return res.status(404).json({
        message: "Cập nhật sản phẩm không thành công",
      });
    }
    return res.status(200).json({
      message: "Cập nhật sản phẩm thành công!",
      datas: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const { status } = await axios.delete(`${API_URL}/products/${id}`);
    if (status !== 200) {
      return res.status(404).json({
        message: "Xoá sản phẩm không thành công!",
      });
    }
    return res.status(200).json({
      message: "Xoá sản phẩm thành công!",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
