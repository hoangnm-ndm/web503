
import bcrypt from 'bcrypt';
import User from "../models/User"
import { signUpValidator } from "../validations/users"

export const signUp = async (req, res) => {
    try {
        const { error } = signUpValidator.validate(req.body, { abortEarly: false})
        if(error) {
            const errors = error.details.map((err) => err.message)
            return res.status(400).json({
                message: errors
            })
        }

        // Tìm xem email này đã tồn tại trong DB chưa?
        const userExist = await User.findOne({ email: req.body.email})
        if(userExist) {
            return res.status(400).json({
                message: "Email này đã tồn tại!"
            })
        }

        // Mã hoá password:
        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        // Khởi tạo new user:
        const user = await User.create({
            userName: req.body.userName,
            email: req.body.email,
            password: hashedPassword
        });

        user.password = undefined

        return res.status(200).json({
            message: "Đăng ký thành công!",
            user
        })

    } catch (error) {
        return res.status(500).json({
            message: "Error: " + error.message
        })
        
    }
}