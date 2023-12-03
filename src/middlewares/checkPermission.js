import dotenv from "dotenv";
dotenv.config();

export const checkPermission = async (req, res, next) => {
  try {
    const token = req.headers?.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        message: "Chưa đăng nhập!",
      });
    }
    const user = verifyToken(token);

    // Kiểm tra xem user có quyền hạn này hay không?
    if (user.role !== "admin") {
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
