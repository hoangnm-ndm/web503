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
    const autho = req.headers.authorization;
    if (!autho) {
      return res.status(400).json({
        message: "Ban chua dang nhap!",
      });
    }
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, SECRET_CODE, async (err, payload) => {
      if (err) {
        if (err.name === "JsonWebTokenError") {
          return res.status(400).json({
            message: "Token loi",
          });
        }
        if (err.name === "TokenExpiredError") {
          return res.status(400).json({
            message: "Token het han",
          });
        }
      }
      // lấy thông tin user từ database
      const user = await User.findById(payload.id);
      if (!user) {
        return res.status(400).json({
          message: "User khong ton tai trong he thong",
        });
      }
      // kiểm tra xem user có đủ quyền để thực hiện hành động đó không
      if (user && user.role !== "admin") {
        return res.status(400).json({
          message: "Bạn không có quyền để thực hiện hành động này",
        });
      }
      // lưu thông tin user vào request để sử dụng trong các middleware khác
      req.user = user;
      next();
    });
  } catch (error) {
    return res.status(500).json({
      message: "Loi Server",
    });
  }
};
