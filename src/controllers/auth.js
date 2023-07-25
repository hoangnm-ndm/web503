import { signUpValidator } from '../validations/user';
export const signUp = async(req, res) => {
    try {
        // Bước 1: Kiểm tra dữ liệu người dùng
        const { error } = signUpValidator.validate(req.body, {abortEarly: false})
        console.log(error)
        const errors = error.details.map(err => err.message)
        ["loi a", "loi b", "loi c"]
        if(error ) {
            return res.status(400).json({
                messages: errors
            })
        }
        // Bước 2: Email người dùng đăng ký đã tồn tại trong DB hay chưa?
        // Bước 3: Mã hoá mật khẩu

    } catch (error) {
        return res.status(500).json({
            name: error.name || "Lỗi",
            message: error.message || "Lỗi server!"
        })
    }
}