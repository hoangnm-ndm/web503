import dotenv from "dotenv";
import Product from "../models/Product";
import productSchema from "../validations/product";
dotenv.config();

const { API_URL } = process.env;

export const getAll = async (req, res) => {
  try {
    console.log("req.query", req.query);
    const _limit = req.query._limit || 10;
    const _page = req.query._page || 1;
    const _sort = req.query._sort || "createdAt";
    const _order = req.query._order || "asc";
    const options = {
      limit: _limit,
      page: _page,
      // [sort] {Object | String}
      sort: {
        [_sort]: _order === "asc" ? 1 : -1,
      },
      // createdAt:
    };
    // const data = await Product.find({});
    // Model.paginate([query], [options], [callback])
    const data = await Product.paginate({}, options);
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
    const data = await Product.findById(id);
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
    // console.log("noi dung trong create controller:", req.body)
    const { error } = productSchema.validate(body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    const data = await Product.create(body);
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

    const { error } = productSchema.validate(body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    const data = await Product.findByIdAndUpdate(id, body, { new: true });
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
    const data = await Product.findByIdAndDelete(id);
    if (!data) {
      return res.status(404).json({
        message: "Xoá sản phẩm thất bại!",
      });
    }

    return res.status(200).json({
      message: "Xoá sản phẩm thành công!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Xoá sản phẩm thất bại!",
    });
  }
};
