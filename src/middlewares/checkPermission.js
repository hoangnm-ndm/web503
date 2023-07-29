import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/User";
dotenv.config();

const { SECRET_CODE } = process.env;
export const checkPermission = async (req, res, next) => {
  try {
    // Bước 1: Kiểm tra xem đã đăng nhập hay chưa?
    console.log(req.headers);
    const token = req.headers.authorization.split(" ")[1];
    // ["Bearer", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGM0N2ZjYjkyYjRmZGY2NWM3NTcxZGUiLCJpYXQiOjE2OTA1OTk0MDAsImV4cCI6MTY5MDY4NTgwMH0.tUW1WulBgtoYTKWaKIMTu5WF4Hdu5dMFHTPsH1r6dao"]
    if (!token) {
      return res.status(403).json({
        message: "Bạn chưa đăng nhập!",
      });
    }

    // Bước 2: Verify token
    const decoded = jwt.verify(token, SECRET_CODE);
    if (!decoded) {
      return res.status(400).json({
        message: "Token Error!",
      });
      // throw new Error("Token Error!");
    }
    // Bước 3: Find User từ token
    const user = await User.findById(decoded._id);
    if (!user) {
      return res.status(404).json({
        message: "User không tồn tại trong hệ thống!",
      });
    }
    // Bước 4: Check user.role
    if (user.role === "admin") {
      next();
    }
    // Bước 5: Xử lý lỗi!
    return res.status(400).json({
      message: "Bạn không có quyền làm việc này!",
    });
  } catch (error) {
    return res.status(400).json({
      name: error.name,
      message: error.message,
    });
  }
};
