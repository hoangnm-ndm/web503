import { signinSchema, signupSchema } from "../schemas/auth.js";
import bcrypt from "bcryptjs";
import User from "../models/user.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const { SECRET_CODE } = process.env;

export const signup = async (req, res) => {
  try {
    const { error } = signupSchema.validate(req.body, { abortEarly: false });
    const { email, password } = req.body;
    if (error) {
      return res.status(400).json({
        message: error.details.map((err) => err.message),
      });
    }

    const haveEmail = await User.findOne({ email });
    if (!haveEmail) {
      return res.status(400).json({
        message: "Email nay da dk dang ky",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      ...req.body,
      password: hashPassword,
    });
    user.password = undefined;
    return res.status(201).json({
      message: "Tạo tài khoản thành công",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Loi server",
    });
  }
};

/**
 * B1: Validate req voi Joi
 * B2: Tim user trong db xem ton tai hay khong?
 * B3: Check isMatch = bcrypt.compare()
 * B4: Tao token = jwt.sign(payload, SECRET_CODE, {expiresIn: "1d"})
 * B5: Xoa password va gui lai thong tin user, token cho nguoi dung
 */

export const signin = async (req, res) => {
  try {
    const { error } = signinSchema.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(400).json({
        message: error.details.map((err) => err.message),
      });
    }
    const { email, password } = req.body;

    const haveUser = await User.findOne({ email });
    if (!haveUser) {
      return res.status(400).json({
        message: "Tài khoản không tồn tại!",
      });
    }
    const checkPassword = await bcrypt.compare(password, haveUser.password);
    if (!checkPassword) {
      return res.status(400).json({
        message: "Mật khẩu không khớp!",
      });
    }
    const token = jwt.sign(
      {
        id: haveUser._id,
      },
      SECRET_CODE,
      { expiresIn: "1d" }
    );
    console.log("token:", token);

    haveUser.password = undefined;
    return res.status(200).json({
      message: "Đăng nhập thành công!",
      accessToken: token,
      user: haveUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Loi server",
    });
  }
};
