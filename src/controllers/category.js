import Category from "../models/category";

export const getAll = async (req, res) => {
  try {
    const categories = await Category.find();
    if (categories.length === 0) {
      res.send({
        messenger: "Danh sách category trống",
      });
    }
    return res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ messenger: err });
  }
};

export const getDetail = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      res.send({
        messenger: "Không tìm thấy category",
      });
    }
    return res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ messenger: err });
  }
};

export const create = async (req, res) => {
  try {
    const validate = categorySchema.validate(req.body);
    console.log("validate: ", validate);
    const category = await Category.create(req.body);
    if (!category) {
      res.send({
        messenger: "Thêm category không thành công",
      });
    }
    return res.json(category);
  } catch (err) {
    res.status(500).json({ messenger: err });
  }
};

export const remove = async (req, res) => {
  try {
    const category = await Category.delete(req.params.id);
    return res.status(200).json({
      message: "Category đã được xóa thành công",
      data: category,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const update = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body);
    if (!category) {
      res.send({
        messenger: "Update category không thành công",
      });
    }
    return res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ messenger: err });
  }
};
