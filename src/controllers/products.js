import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const { API_URL } = process.env;

export const getAll = async (req, res) => {
  try {
    const { data } = await axios.get(`${API_URL}/products`);
    if (!data || data.length === 0) {
      return res.status(404).json({
        message: "Không tìm thấy sản phẩm",
      });
    }

    return res.status(200).json({
      message: "Gọi danh sách sản phẩm thành công!",
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
    const { data } = await axios.get(`${API_URL}/products/${id}`);
    if (!data) {
      return res.status(404).json({
        message: "Không tìm thấy sản phẩm",
      });
    }

    return res.status(200).json({
      message: "Gọi chi tiết sản phẩm thành công!",
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
    const { data } = await axios.post(`${API_URL}/products`, body);
    console.log(data);
    if (!data) {
      return res.status(404).json({
        message: "Tạo mới sản phẩm thất bại!",
      });
    }

    return res.status(200).json({
      message: "Tạo mới sản phẩm thành công!",
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
    const body = req.body;
    const id = req.params.id;
    const { data } = await axios.put(`${API_URL}/products/${id}`, body);
    console.log(data);
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

export const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const { status } = await axios.delete(`${API_URL}/products/${id}`);
    console.log(data);
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
      message: "Xoá sản phẩm thất bại!",
    });
  }
};
