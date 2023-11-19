import Category from "../models/Category";

export const getAllCateries = async (req, res) => {
  try {
    const data = await Category.find();
    if (!data || !data.length) {
      return res.status(404).json({
        message: "Khong co danh muc nao!",
        data: [],
      });
    }
    return res.status(200).json({
      message: "Lay danh sach danh muc thanh cong!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};

export const getDetailCategory = async (req, res) => {
  try {
    const data = await Category.findById(req.params.id);
    if (!data) {
      return res.status(404).json({
        message: "Khong co danh muc nao!",
      });
    }
    return res.status(200).json({
      message: "Lay danh muc thanh cong!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};

export const createCategory = async (req, res) => {
  try {
    const body = req.body;
    if (!body) {
      return res.status(400).json({
        message: "Du lieu khong hop le!",
      });
    }
    const data = await Category.create(body);
    if (!data) {
      return res.status(404).json({
        message: "Tao danh muc that bai!",
      });
    }
    return res.status(200).json({
      message: "Tao danh muc thanh cong!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};

export const removeCategory = async (req, res) => {
  try {
    const data = await Category.findOneAndDelete({ _id: req.params.id });
    if (!data) {
      return res.status(404).json({
        message: "Xoa khong thanh cong!",
      });
    }
    return res.status(200).json({
      message: "Xoa thanh cong!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const body = req.body;
    if (!body) {
      return res.status(400).json({
        message: "Du lieu khong hop le!",
      });
    }
    const data = await Category.findOneAndReplace(
      { _id: req.params.id },
      body,
      { new: true }
    );
    if (!data) {
      return res.status(404).json({
        message: "Cap nhat danh muc that bai!",
      });
    }
    return res.status(200).json({
      message: "Cap nhat danh muc thanh cong!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};
