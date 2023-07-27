import { signInValidator, signUpValidator } from "../validations/user";
import bcryptjs from "bcryptjs";
import User from "../models/User";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

const { SECRET_CODE } = process.env;
export const signUp = async (req, res) => {
  try {
    // Bước 1: Kiểm tra dữ liệu người dùng
    const { error } = signUpValidator.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        messages: errors,
      });
    }
    // Bước 2: Email người dùng đăng ký đã tồn tại trong DB hay chưa?
    const userExist = await User.findOne({ email: req.body.email });
    if (userExist) {
      return res.status(400).json({
        message: "Email này đã được đăng ký, bạn có muốn đăng nhập không?",
      });
    }

    // Bước 3: Mã hoá mật khẩu

    // const hashPassword = bcryptjs.hashSync(req.body.password, 10)
    const hashPassword = await bcryptjs.hash(req.body.password, 10);

    // Bước 4: Thông báo thành công:
    const user = await User.create({
      userName: req.body.userName,
      email: req.body.email,
      password: hashPassword,
    });

    user.password = undefined;
    return res.status(200).json({
      message: "Đăng ký thành công!",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name || "Lỗi",
      message: error.message || "Lỗi server!",
    });
  }
};

export const signIn = async (req, res) => {
  try {
    // Bước 1: Validate dữ liệu người dùng
    const { error } = signInValidator.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }
    // Bước 2: Kiểm tra xem email có trong db hay không?
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({
        message: "Email này chưa đăng ký, bạn có muốn đăng ký không?",
      });
    }

    // Bước 3: Kiểm tra password
    const isMatch = await bcryptjs.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Password không đúng, vui lòng kiểm tra lại!",
      });
    }

    // Bước 4: Tạo ra token
    const accessToken = jwt.sign({ _id: user._id }, SECRET_CODE, {
      expiresIn: "1d",
    });

    // Bước 5: Return "Đăng nhập thành công!"
    user.password = undefined;
    return res.status(200).json({
      message: "Đăng nhập thành công!",
      accessToken,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};
