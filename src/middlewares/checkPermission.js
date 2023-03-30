import jwt from "jsonwebtoken";

export const checkPermission = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  const token = authHeader && authHeader.split(" ")[1];
  if (!authHeader) {
    return res.status(401).json({
      message: "Ban chua dang nhap!",
    });
  }

  jwt.verify(token, "123456", async (err, payload) => {
    if (err === "JsonWebTokenError") {
      return res.status(400).json({
        message: "Token không hợp lệ",
      });
    }

    if (err === "TokenExpireError") {
      return res.status(400).json({
        message: "Token hết hạn",
      });
    }

    const user = await User.findById(payload.id);
    if (user.role !== "admin") {
      return res.status(400).json({
        message: "Bạn không có quyền này!!!",
      });
    }

    next();
  });
};
