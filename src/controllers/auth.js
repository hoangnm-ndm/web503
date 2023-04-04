import { signupSchema, signinSchema } from "../schemas/auth";
import User from "../models/user";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();
/**
 * Với signup
 * B1: Validate req.body với Joi
 * B2: Lấy từ req.body ra name, email, password.
 * B3: Kiển tra xem email này đã tồn tại trong db hay chưa?
 * B4: Mã hoá với bcryptjs
 * B5: Lưu user vào DB
 * B6: Gán password = undefined.
 * B7: Trả về message, accessToken và user cho người dùng
 *
 * Với signin:
 * B1: Validate req.body
 * B2: Lấy email và password ra lần lượt kiểm tra từng giá trị.
 * B3: Nếu đúng cả password và email -> tạo ra ra token.
 * B4: Gán password = undefined trước khi trả dữ liệu cho người dùng.
 */

const { SECRET_CODE } = process.env;

export const signup = async (req, res) => {
  try {
    const { error } = signupSchema.validate(req.body);

    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }

    const { name, email, password } = req.body;

    // Kiem tra email da co trong DB hay chua?
    const findEmail = await User.findOne({ email });
    if (findEmail) {
      return res.status(400).json({
        message: "Email này đã được đăng ký!",
      });
    }

    const passwordhash = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: passwordhash,
    });
    user.password = undefined;

    return res.status(200).json({
      message: "Đăng ký tài khoản thành công!",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

/**
 *  * Với signin:
 * B1: Validate req.body
 * B2: Lấy email và password ra lần lượt kiểm tra từng giá trị.
 * B3: Nếu đúng cả password và email -> tạo ra ra token.
 * B4: Gán password = undefined trước khi trả dữ liệu cho người dùng.
 */
export const signin = async (req, res) => {
  try {
    const { error } = signinSchema.validate(req.body);

    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }

    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Tai khoan khong ton tai!",
      });
    }
    console.log(user);
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Mat khau khong dung!",
      });
    }

    const token = jwt.sign({ id: user._id }, SECRET_CODE, {
      expiresIn: "1d",
    });

    user.password = undefined;
    return res.status(200).json({
      message: "Dang nhap thanh cong!",
      accessToken: token,
      user,
    });

    // bcrypt.compare("B4c0//", hash, function (err, res) {
    //   // res === true
    // });
  } catch (error) {
    return res.status(500).json({
      message: "loi server",
    });
  }
};
