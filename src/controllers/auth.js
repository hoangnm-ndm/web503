import User from "../models/User";
import { signInValid, signUpValid } from "../validations/userValid";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const { SECRET_CODE } = process.env;

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
    const { error } = signUpValid.validate(body, { abortEarly: false });
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
    const hashPassword = await bcrypt.hash(password, 10);

    if (!hashPassword) {
      return res.status(400).json({
        message: "Password is not hashed!",
      });
    }

    // Buoc 4:
    const user = await User.create({
      userName,
      email,
      password: hashPassword,
      role,
    });

    // Buoc 5:
    user.password = undefined;
    return res.status(200).json({
      message: "Successfully!",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name || "Error",
      message: error.message || "Server error!",
    });
  }
};

export const signIn = async (req, res) => {
  try {
    /**
     * Buoc 1: Validate du lieu dau vao
     * Buoc 2: Kiem tra Email co trong he thong khong?
     * Buoc 3: Kiem tra mat khau co dung khong?
     * Buoc 4: Tao token
     * Buoc 5: Tra ve ket qua
     */

    // Buoc 1:
    const { error } = signInValid.validate(req.body, { abortEarly: false });

    if (error) {
      const errors = error.details.map((item) => item.message);
      return res.status(400).json({
        message: errors,
      });
    }

    // Buoc 2: Kiem tra email co ton tai hay khong?

    const { email, password } = req.body;

    const checkUser = await User.findOne({ email });
    if (!checkUser) {
      return res.status(400).json({
        message: "Email does not exist!",
      });
    }

    // Buoc 3: Kiem tra mat khau co dung khong?
    const checkPassword = await bcrypt.compare(password, checkUser.password);

    if (!checkPassword) {
      return res.status(400).json({
        message: "Password is incorrect!",
      });
    }

    // Buoc 4: Tao token
    const accessToken = jwt.sign({ id: checkUser._id }, SECRET_CODE, {
      expiresIn: "10d",
    });

    if (!accessToken) {
      return res.status(400).json({
        message: "Access token is not created!",
      });
    }

    // Buoc 5: Tra ve ket qua
    checkUser.password = undefined;
    return res.status(200).json({
      message: "Successfully!",
      accessToken,
      user: checkUser,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name || "Error",
      message: error.message || "Server error!",
    });
  }
};
