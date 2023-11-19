import Category from "../models/Category";

export const getAllCateries = async (req, res) => {
  try {
    const data = await Category.find();
    console.log(data);
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
