import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/User";

dotenv.config();
export const checkIsAdmin = async (req, res, next) => {
  try {
    // Kiem tra xem user co phai la admin hay khong?
    const token = req.headers?.authorization.split(" ")[1];

    // Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTYwNzE2ZWYxZDlmMGIwYTNjMzIzMmUiLCJpYXQiOjE3MDEyNTA5MDQsImV4cCI6MTcwMTMzNzMwNH0.7V-nvBMZEgf5WUSN7PHUB0MSs7wvrMUI-0qeQ3rBAOo
    // ["Bearer", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTYwNzE2ZWYxZDlmMGIwYTNjMzIzMmUiLCJpYXQiOjE3MDEyNTA5MDQsImV4cCI6MTcwMTMzNzMwNH0.7V-nvBMZEgf5WUSN7PHUB0MSs7wvrMUI-0qeQ3rBAOo"]
    const decode = jwt.verify(token, process.env.SECRET_CODE);
    if (!decode) {
      return res.status(400).json({
        message: "Token error!",
      });
    }
    const checkUser = await User.findById(decode._id);
    if (!checkUser) {
      return res.status(400).json({
        message: "User not found!",
      });
    }

    if (checkUser.role !== "admin") {
      return res.status(400).json({
        message: "You are not admin!",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};
