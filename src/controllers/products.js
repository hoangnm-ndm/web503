import Product from "../models/Product";
import productSchema from "../validations/product";

export const getAll = async (req, res) => {
  try {
    const {
      _limit = 10,
      _page = 1,
      _sort = "createdAt",
      _order = "asc",
    } = req.query;
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
    if (!data || data.docs.length === 0) {
      throw new Error("Failed");
    }

    return res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getDetail = async (req, res) => {
  try {
    const data = await Product.findOne({ _id: req.params.id });
    if (!data) {
      throw new Error("Failed");
    }

    return res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const filter = async (req, res) => {
  try {
    const filterBy = req.query;
    const data = await Product.find(filterBy);
    if (!data) {
      throw new Error("Failed");
    }

    return res.status(200).json({
      message: "Success",
      data,
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
    const { error } = productSchema.validate(body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    const data = await Product.create(body);
    if (!data) {
      throw new Error("Failed");
    }

    return res.status(200).json({
      message: "Success",
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
