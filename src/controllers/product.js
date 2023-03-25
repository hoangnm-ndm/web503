import Joi from "Joi";
import Product from "../models/product.js";

const productSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  description: joi.string(),
});
export const getAll = async (req, res) => {
  try {
    // const { data: products } = await axios.get(`${PORT}`);
    const products = await Product.find();
    if (products.length === 0) {
      res.status(404).json({
        message: "Không có sản phẩm nào",
      });
    }
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
export const get = async (req, res) => {
  try {
    // const { data: product } = await axios.get(
    //   `${process.env.API_URI}/${req.params.id}`
    // );
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        message: "Not found",
      });
    }
    return res.status(200).json({
      message: "Product found",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi server",
    });
  }
};
export const create = async (req, res) => {
  try {
    // const { data: product } = await axios.post(
    //   "${process.env.API_URI}",
    //   req.body
    // );

    const { error } = productSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }

    const product = await Product.create(req.body);
    if (!product) {
      return res.status(400).json({
        message: "Không thể tạo sản phẩm",
      });
    }
    return res.status(201).json({
      message: "Thêm sản phẩm thành công",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
export const remove = async (req, res) => {
  try {
    // await axios.delete(`${process.env.API_URI}/${req.params.id}`);
    const product = await Product.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      message: "Sản phẩm đã được xóa thành công",
      product,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const update = async (req, res) => {
  try {
    // const { data: product } = await axios.patch(
    //   `${process.env.API_URI}/${req.params.id}`,
    //   req.body
    // );

    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product) {
      return res.status(404).json({
        message: "Không tìm thấy sản phẩm",
      });
    }
    return res.status(200).json({
      message: "Sản phẩm đã được cập nhật thành công",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

// export const put = async (req, res) => {
//   try {
//     const { data: product } = await axios.put(
//       `${process.env.API_URI}/${req.params.id}`,
//       req.body
//     );
//     console.log(data);
//     if (!product) {
//       return res.status(404).json({
//         message: "Không tìm thấy sản phẩm",
//       });
//     }
//     return res.status(200).json({
//       message: "Sản phẩm đã được cập nhật thành công",
//       data: product,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: error,
//     });
//   }
// };
