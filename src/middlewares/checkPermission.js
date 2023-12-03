import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/User";
dotenv.config();

export const checkPermission = async (req, res, next, role) => {
  try {
    if (req.user.role !== role) {
      return res.status(403).json({
        message: "Bạn ko phải là người có quyền này!",
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
