import axios from "axios";

import dotenv from "dotenv";
dotenv.config();

const { DB_URL } = process.env;
export const getAll = async (req, res) => {
  try {
    const { data } = await axios.get(`${DB_URL}/products`);
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
    const datas = await axios.get(`${DB_URL}/products/${id}`);
    if (!datas) {
      return res.status(404).json({
        message: "Không tìm thấy sản phẩm",
      });
    }
    const { data } = datas;
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
    const { data } = await axios.post(`${DB_URL}/products`, body);
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
