import User from "../models/User";
import { signInValid, signUpValid } from "../validations/userValid";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  try {
    /**
     * Bước 1: Validation values
     * Bước 2: Đã tồn tại email trong hệ thống chưa?
     * Bước 3: Mã hoá password
     * Bước 4: Xoá password trước khi gửi trả dữ liệu.
     * Bước 5: Gửi thông báo cho người dùng.
     */

    const { error } = signUpValid.validate(req.body, { abortEarly: false });

    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors.join(", "),
      });
    }

    const checkEmail = await User.findOne({ email: req.body.email });

    if (checkEmail) {
      return res.status(400).json({
        message: "Email này đã được đăng ký, bạn có muốn đăng nhập không?",
      });
    }

    // B3: ma hoa pass

    // Cach 1: Dung bcrypt
    // bcrypt.hash(req.body.password, 10, async (err, hash) => {
    //   if (err) {
    //     return res.status(400).json({
    //       message: "Ma hoa mat khau that bai!",
    //     });
    //   }
    //   if (hash) {
    //     const user = {
    //       username: req.body.username,
    //       email: req.body.email,
    //       password: hash,
    //     };

    //     const data = await User.create(user);
    //     if (!data) {
    //       return res.status(400).json({
    //         message: "Dang ky that bai!",
    //       });
    //     }
    //     data.password = undefined;
    //     return res.status(200).json({
    //       message: "Dang ky thanh cong!",
    //       data,
    //     });
    //   }
    // });

    // Cach 2: Dung bcryptjs
    const passwordHash = await bcrypt.hash(req.body.password, 10);
    if (!passwordHash) {
      return res.status(400).json({
        message: "Ma hoa mat khau that bai!",
      });
    }
    const user = {
      username: req.body.username,
      email: req.body.email,
      password: passwordHash,
    };

    const data = await User.create(user);
    if (!data) {
      return res.status(400).json({
        message: "Dang ky that bai!",
      });
    }
    data.password = undefined;
    return res.status(200).json({
      message: "Dang ky thanh cong!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Dang ky that bai!",
      detail: error.message,
    });
  }
};

export const signIn = async (req, res) => {
  try {
    /**
     * Buoc 1: Validation values
     * Buoc 2: Kiem tra email co ton tai trong he thong khong?
     * Buoc 3: So sanh password
     * Buoc 4: Tao token
     * Buoc 5: Gui token cho nguoi dung
     */
    const { error } = signInValid.validate(req.body, { abortEarly: false });

    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }

    // Buoc 2: Kiem tra email co ton tai trong he thong khong?

    const checkEmail = await User.findOne({ email: req.body.email });

    // Buoc 3: So sanh pass:

    if (!checkEmail) {
      return res.status(400).json({
        message: "Email chua duoc dang ky!",
      });
    }

    const checkPass = await bcrypt.compare(
      req.body.password,
      checkEmail.password
    );
    console.log(checkPass);

    if (!checkEmail) {
      return res.status(400).json({
        message: "Mat khau khong dung!",
      });
    }

    // Buoc 4: Tao token

    const token = jwt.sign({ _id: checkEmail._id }, "banthayHoang", {
      expiresIn: "1d",
    });

    if (!token) {
      return res.status(400).json({
        message: "Tao token that bai!",
      });
    }

    // Buoc 5: Gui token cho nguoi dung
    checkEmail.password = undefined;
    return res.status(200).json({
      message: "Dang nhap thanh cong!",
      accessToken: token,
      user: checkEmail,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};
