import jwt from "jsonwebtoken";
import User from "../models/user.js";
import dotenv from "dotenv";

dotenv.config();

const { SECRET_CODE } = process.env;
export const checkPermission = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(403).json({
        message: "Bạn chưa đăng nhập",
      });
    }
    SECRET_CODE;
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, SECRET_CODE, async (error, payload) => {
      if (error) {
        if (error.name == "TokenExpiredError") {
          return res.json({
            message: "Token không hợp lệ",
          });
        }
        if (error.name == "TokenExpiredError") {
          return res.json({
            message: "Token hết hạn",
          });
        }
      }
      const user = await User.findById(payload.id);
      if (user && user.role !== "admin") {
        return res.status(403).json({
          message: "Bạn không có quyền truy cập tài nguyên!",
        });
      }
      next();
    });
  } catch (error) {
    return res.status(401).json({
      message: error.message || "Token không hợp lệ",
    });
  }
};
