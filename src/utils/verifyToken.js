import User from "../models/User";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers?.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        message: "Chưa đăng nhập!",
      });
    }

    const decoded = jwt.verify(token, process.env.SECRET_CODE);
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({
        message: "User not found!",
      });
    }
    return user;
  } catch (error) {
    return res.status(500).json({
      name: "VERIFY TOKEN ERROR!",
      message: error.message || "Server error!",
    });
  }
};
