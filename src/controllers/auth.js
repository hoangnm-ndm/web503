import { signUpValidator } from '../validations/user';
import bcryptjs from "bcryptjs"
import User from '../models/User'
export const signUp = async(req, res) => {
    try {
        // Bước 1: Kiểm tra dữ liệu người dùng
        const { error } = signUpValidator.validate(req.body, {abortEarly: false})
        if(error ) {
            const errors = error.details.map(err => err.message)
            return res.status(400).json({
                messages: errors
            })
        }
        // Bước 2: Email người dùng đăng ký đã tồn tại trong DB hay chưa?
        const userExist = await User.findOne({ email: req.body.email})
        if(userExist) {
            return res.status(400).json({
                message: "Email này đã được đăng ký, bạn có muốn đăng nhập không?"
            })
        }

        // Bước 3: Mã hoá mật khẩu

        // const hashPassword = bcryptjs.hashSync(req.body.password, 10)
        const hashPassword = await bcryptjs.hash(req.body.password, 10)
        
        // Bước 4: Thông báo thành công:
        const user = await User.create({
            userName: req.body.userName,
            email: req.body.email,
            password: hashPassword
        })

        user.password = undefined
        return res.status(200).json({
            message: "Đăng ký thành công!",
            user
        })

    } catch (error) {
        return res.status(500).json({
            name: error.name || "Lỗi",
            message: error.message || "Lỗi server!"
        })
    }
}