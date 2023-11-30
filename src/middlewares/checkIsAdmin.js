import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/User";
dotenv.config();

export const checkIsAdmin = async (req, res, next) => {
  try {
    const token = req.headers?.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        message: "Chưa đăng nhập!",
      });
    }

    const decoded = jwt.verify(token, process.env.SECRET_CODE);
    if (!decoded) {
      return res.status(401).json({
        message: "Token không hợp lệ!",
      });
    }
    const checkUser = await User.findById(decoded.id);
    if (!checkUser) {
      return res.status(404).json({
        message: "User not found!",
      });
    }

    if (checkUser.role !== "admin") {
      return res.status(403).json({
        message: "Bạn không phải admin!",
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
