import User from "../models/User";
import { userValidate } from "../validations/userValid";
import bcrypt from "bcrypt";

export const signUp = async (req, res) => {
  try {
    /**
     * Bước 1: Validate value đầu vào
     * Bước 2: Kiểm tra email đã tồn tại hay chưa?
     * Bước 3: Mã hoá mật khẩu
     * Bước 4: Tạo user mới
     * Bước 5: Trả về kết quả
     *
     */

    // Buowc 1:
    const body = req.body;
    const { error } = userValidate.validate(body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((item) => item.message);
      return res.status(400).json({
        message: errors,
      });
    }

    const { userName, email, password, role } = body;

    // Buoc 2:
    const checkEmail = await User.findOne({ email });
    if (checkEmail) {
      return res.status(400).json({
        message: "Email already exists!",
      });
    }

    // Buoc 3:
    bcrypt.hash(password, 10, async (err, hash) => {
      if (err) {
        res.status(500).json({
          message: "Hash password failed!",
        });
        return;
      }

      // Buoc 4:
      const user = await User.create({
        userName,
        email,
        password: hash,
        role,
      });

      user.password = undefined;

      // Buoc 5:
      return res.status(200).json({
        message: "Successfully!",
        user,
      });
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name || "Error",
      message: error.message || "Server error!",
    });
  }
};
