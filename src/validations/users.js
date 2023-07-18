import Joi from "joi"

export const signUpValidator = Joi.object({
    userName: Joi.string().required().messages({
        "string.empty": "Tên không được để trống!",
        "any.required": "Trường \"name\" là bắt buộc!"
    }),
    email: Joi.string().email().required().messages({
        "string.empty": "Email không được để trống!",
        "any.required": "Trường \"Email\" là bắt buộc!",
        "string.email": "Email không đúng định dạng!"
    }),
    password: Joi.string().required().min(6).messages({
        "string.empty": "Password không được để trống!",
        "any.required": "Trường \"Password\" là bắt buộc!",
        "string.min": "Password phải có ít nhất 6 ký tự!"
    }),
    confirmPassword: Joi.string().required().valid(Joi.ref("password")).messages({
        "string.empty": "Password không được để trống!",
        "any.required": "Trường \"Password\" là bắt buộc!",
        "any.only": "Mật khẩu nhập lại không khớp!"
    })
})