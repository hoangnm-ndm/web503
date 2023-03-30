import jwt from "jsonwebtoken";
import User from "../models/user.js";
export const checkPermission = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  const token = authHeader && authHeader.split(" ")[1];
  if (!authHeader) {
    return res.status(401).json({
      message: "Ban chua dang nhap!",
    });
  }
  console.log(token);

  jwt.verify(token, "123456", function (err, decoded) {
    console.log(err);
    console.log(decoded);
  });

  next();

  // jwt.verify(token, "123456", async (err, payload) => {
  //   console.log(payload);
  // if (err === "JsonWebTokenError") {
  //   return res.status(400).json({
  //     message: "Token không hợp lệ",
  //   });
  // }

  // if (err === "TokenExpireError") {
  //   return res.status(400).json({
  //     message: "Token hết hạn",
  //   });
  // }

  // const user = await User.findById(payload.id);
  // console.log(user);
  // if (user.role !== "admin") {
  //   return res.status(400).json({
  //     message: "Bạn không có quyền này!!!",
  //   });
  // }

  // next();
  // });
};
