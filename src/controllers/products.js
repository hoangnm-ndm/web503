import axios from "axios";

import dotenv from "dotenv";
import products from "../models/products";
dotenv.config();

const { DB_URL } = process.env;
export const getAll = async (req, res) => {
  try {
    // const { data } = await axios.get(`${DB_URL}/products`);
    const data =  await products.find({})
    if (!data) {
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
    // const datas = await axios.get(`${DB_URL}/products/${id}`);
    const data = await products.find({_id: id})
    // Cach 2:
    // const data = await products.findById(id)
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

export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const { data } = await axios.put(`${DB_URL}/products/${id}`, body);
    if (!data) {
      return res.status(404).json({
        message: "Cập nhật sản phẩm thất bại!",
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

export const create = async (req, res) => {
  try {
    const body = req.body;
    // const { data } = await axios.post(`${DB_URL}/products`, body);
    const data = await products.create(body)
    if (!data) {
      return res.status(404).json({
        message: "Thêm mới sản phẩm thất bại!",
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

export const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const { status } = await axios.delete(`${DB_URL}/products/${id}`);
    if (!status || status !== 200) {
      return res.status(404).json({
        message: "Xoá sản phẩm thất bại!",
      });
    }
    return res.status(200).json({
      message: "Xoá sản phẩm thành công!",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Xoá sản phẩm thất bại!",
    });
  }
};
