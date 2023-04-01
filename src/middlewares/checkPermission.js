import jwt from "jsonwebtoken";
import User from "../models/user";

/**
 * B1: Check xem user có đăng nhập hay không bằng cách check xem có Autho không?
 * B2: Lấy jwt từ autho
 * B3: Lấy _id từ jwt
 * B4: Lấy user từ database với _id đã tìm được
 * B5: Check role của user đã lấy được (nếu là admin -> next, không phải admin -> throw Errors)
 *
 */
export const checkPermission = async (req, res, next) => {
  try {
    // kiểm tra xem user có đăng nhập không
    if (!req.headers.authorization) {
      throw new Error("Bạn phải đăng nhập để thực hiện hành động này");
    }

    // lấy jwt token từ header
    const token = req.headers.authorization.split(" ")[1];

    // xác thực jwt token
    const { _id } = jwt.verify(token, "123456", async (err, payload) => {
      console.log(err);
    });
    const user = await User.findById(_id);
    // kiểm tra xem user có quyền admin không
    if (user.role != "admin") {
      throw new Error("Bạn không có quyền để thực hiện hành động này");
    }
    // lưu thông tin user vào request để sử dụng cho các middleware khác
    req.user = user;

    next();
  } catch (error) {
    res.status(401).json({ message: error });
  }
};
