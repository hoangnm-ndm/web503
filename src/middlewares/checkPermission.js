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
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];
  console.log(token);
  jwt.verify(token, SECRET_CODE, function (err, payload) {
    if (err) {
      if (err.name === "JsonWebTokenError") {
        return res.status(400).json({
          message: err.message,
        });
      }
      if (err.name === "TokenExpiredError") {
        return res.status(400).json({
          message: err.message,
        });
      }
    }
    console.log(payload);
    const user = User.findById(payload.id);
    const user2 = User.findOne({ _id: payload.id });
    console.log(user, user2);
  });

  next();
};
