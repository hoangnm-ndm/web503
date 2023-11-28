import { categoryValid } from "../validations/categorryValid";
import { productValidate } from "../validations/productValid";

export const checkBodyRequestProduct = (req, res, next) => {
  try {
    const { error } = productValidate.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((item) => item.message);
      return res.status(400).json({
        message: errors,
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      name: error.name || "Error",
      message: error.message || "Server error!",
    });
  }
};

export const checkBodyRequestCategory = (req, res, next) => {
  try {
    const { error } = categoryValid.validate(req.body, { abortEarly: false });

    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      name: error.name || "Error",
      message: error.message || "Server error!",
    });
  }
};
