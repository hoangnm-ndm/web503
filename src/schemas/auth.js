import Joi from "joi";

export const userSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "Name không được bỏ trống",
    "any.required": "Name là trường bắt buộc",
  }),
  email: Joi.string().email().required().messages({
    "string.empty": "Truong email khong duoc de trong",
    "string.email": "Email khong dung dinh dang",
    "any.required": "Truong email la bat buoc",
  }),
  password: Joi.string().required().min(6).messages({
    "any.empty": "Truong mat khau khong duoc de trong",
    "string.min": "Truong mat khau can co it nhat 6 ky tu",
    "any.required": "truong mat khau la bat buoc",
  }),

  confirmPassword: Joi.string().required().valid(Joi.ref("password")).messages({
    "any.empty": "Truong mat khau khong duoc de trong",
    "string.min": "Truong mat khau can co it nhat 6 ky tu",
    "any.required": "Truong mat khau la bat buoc",
    "any.valid": "Mat khau khong khop",
  }),
});
