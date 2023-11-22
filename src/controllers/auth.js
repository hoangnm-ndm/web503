import User from "../models/User";
import { userValid } from "../validations/userValid";
import bcrypt from "bcrypt";

export const signUp = async (req, res) => {
  try {
    /**
     * Bước 1: Validation values
     * Bước 2: Đã tồn tại email trong hệ thống chưa?
     * Bước 3: Mã hoá password
     * Bước 4: Xoá password trước khi gửi trả dữ liệu.
     * Bước 5: Gửi thông báo cho người dùng.
     */

    const { error } = userValid.validate(req.body, { abortEarly: false });

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

    bcrypt.hash(req.body.password, 10, async (err, hash) => {
      if (err) {
        return res.status(400).json({
          message: "Ma hoa mat khau that bai!",
        });
      }
      if (hash) {
        const user = {
          username: req.body.username,
          email: req.body.email,
          password: hash,
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
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: "Dang ky that bai!",
      detail: error.message,
    });
  }
};
