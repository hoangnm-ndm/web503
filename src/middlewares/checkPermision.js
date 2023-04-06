import jwt from "jsonwebtoken";
import User from "../models/user.js";
import dotenv from "dotenv";
dotenv.config();
const { SECRET_CODE } = process.env;

/**
 * B1: Kiem tra req.headers.authorization co ton tai hay khong?
 *    -> Nếu tồn tại -> lấy ra token.
 * B2: Dùng jwt.verify để lấy ra payload, nếu error -> trả về error với từng dạng lỗi của token.
 * B3: Từ id có trong payload của token -> lấy ra user.
 * B4: Từ user -> check quyền role của user. Nếu có quyền admin -> next.
 *  -> Nếu không có quyền admin thì throw error
 */
export const checkPermission = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);

    if (!token) {
      return res.status(400).json({
        message: "Ban chua dang nhap",
      });
    }
    jwt.verify(token, SECRET_CODE, async function (err, decoded) {
      if (err) {
        if ((err.name = "TokenExpiredError")) {
          return res.status(400).json({
            message: err.message || "Token het han",
          });
        }
        if ((err.name = "JsonWebTokenError")) {
          return res.status(400).json({
            message: err.message || "Token loi!",
          });
        }
      }
      const user = await User.findById(decoded.id);
      if (!user) {
        return res.status(400).json({
          message: "User khong co trong he thong!",
        });
      }

      if (user.role !== "admin") {
        return res.status(400).json({
          message: "Ban khong co quyen thuc hien hanh dong nay!",
        });
      }

      req.user = user;
      next();
    });
  } catch (error) {
    return res.status(500).json({
      message: "Loi Server",
    });
  }
};
