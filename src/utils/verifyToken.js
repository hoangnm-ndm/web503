import User from "../models/User";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const verifyToken = async (token) => {
  try {
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
