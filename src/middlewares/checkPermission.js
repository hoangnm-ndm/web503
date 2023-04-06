import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
dotenv.config();

const { SECRET_CODE } = process.env;
export const checkPermission = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(400).json({
        message: "Ban chua dang nhap!",
      });
    }
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(400).json({
        message: "Ban khong phai la thanh vien cua he thong!",
      });
    }

    jwt.verify(token, SECRET_CODE, async function (err, decoded) {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return res.status(400).json({
            message: err.message || "JWT het han!",
          });
        }

        if (err.name === "JsonWebTokenError") {
          return res.status(400).json({
            message: err.message || "JWT khong dung!",
          });
        }
      }

      const user = await User.findById(decoded.id);

      if (!user) {
        return res.status(400).json({
          message: "Khong tim thay user",
        });
      }

      if (user.role !== "admin") {
        return res.status(400).json({
          message: "Ban khong co quyen lam viec nay!",
        });
      }

      req.user = user;
      next();
    });
  } catch (error) {
    return res.status(500).json({
      message: "Loi server",
    });
  }
};
