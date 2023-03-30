import dotenv from "dotenv";
import Product from "../models/product.js";
import { userSchema } from "../schemas/auth.js";

dotenv.config();

export const signup = async (req, res) => {
  try {
    const { error } = userSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }

    const product = await Product.create(req.body);

    if (!product) {
      res.send({
        messenger: "Thêm sản phẩm thất bại",
      });
    }
    return res.status(200).json({
      message: "Thêm sản phẩm thành công",
      data: product,
    });
  } catch (error) {
    res.status(400).send({
      messenger: error,
    });
  }
};
