import Joi from "joi";

export const signupSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": 'Trường "tên" không được để trống',
    "any.required": 'Trường "tên" là bắt buộc',
  }),
  email: Joi.string().email().required().messages({
    "string.empty": 'Trường "email" không được để trống',
    "string.email": 'Trường "email" không đúng định dạng',
    "any.required": 'Trường "email" là bắt buộc',
  }),
  password: Joi.string().min(6).required().messages({
    "string.empty": 'Trường "mật khẩu" không được để trống',
    "string.min": 'Trường "mật khẩu" phải có ít nhất 6 ký tự',
    "any.required": "Trường mật khẩu là bắt buộc",
  }),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required().messages({
    "string.empty": 'Trường "xác nhận mật khẩu" không được để trống',
    "any.required": "Trường xác nhận mật khẩu là bắt buộc",
    "any.only": 'Trường "xác nhận mật khẩu" không khớp',
  }),
});

export const signinSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.empty": 'Trường "email" không được để trống',
    "string.email": 'Trường "email" không đúng định dạng',
    "any.required": 'Trường "email" là bắt buộc',
  }),
  password: Joi.string().min(6).required().messages({
    "string.empty": 'Trường "mật khẩu" không được để trống',
    "string.min": 'Trường "mật khẩu" phải có ít nhất 6 ký tự',
    "any.required": "Trường mật khẩu là bắt buộc",
  }),
});
