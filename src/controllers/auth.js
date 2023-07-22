import User from "../models/User"
import signUpValid from "../validations/user"
import bcryptjs from "bcryptjs"

export const signUp = async (req, res) => {
    try {
        // Bước 1: Kiểm tra thông tin client gửi về:
        const { error } = signUpValid.validate(req.body)
        if(error) {
            return res.status(400).json({
                message: error.details[0].message
            })
        }

        // Bước 2: Kiểm tra email đã tồn tại trong hệ thống hay chưa?
        const userExists = await User.findOne({ email: req.body.email})

        if(userExists){
            return res.status(400).json({
                message: "Email này đã được đăng ký, bạn có muốn đăng nhập không?"
            })
            // throw new Error("Email này đã được đăng ký, bạn có muốn đăng nhập không?")
        }

        // Bước 3: Mã hoá mật khẩu
        const hashPassword = await bcryptjs.hash(req.body.password, 10)
        console.log("hashPassword: ", hashPassword )
        
        // Bước 4: Tạo account cho người dùng:
        const user = await User.create({
            userName: req.body.userName,
            email: req.body.email,
            password: hashPassword
        })


        // Bước 5: Trả về thông báo:
        user.password = undefined
        return res.status(200).json({
            message: "Tạo tài khoản thành công!",
            user,
        })
    } catch (error) {
        return res.status(500).json({
            name: error.name,
            message: error.message
        })
    }
}