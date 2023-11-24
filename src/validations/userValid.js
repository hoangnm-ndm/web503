import Joi from "joi";

export const signUpValid = Joi.object({
  username: Joi.string().required().min(6).max(255).messages({
    "string.base": "Username phải là một chuỗi!",
    "string.empty": "Username không được để trống!",
    "string.min": "Username phải có ít nhất 6 ký tự!",
    "string.max": "Username không được quá 255 ký tự!",
  }),
  email: Joi.string().email().required().messages({
    "string.empty": "Email không được để trống!",
    "string.email": "Email không đúng định dạng!",
  }),
  password: Joi.string().required().min(6).max(255).messages({
    "string.empty": "Password không được để trống!",
    "string.min": "Password phải có ít nhất 6 ký tự!",
    "string.max": "Password không được quá 255 ký tự!",
  }),
  confirmPass: Joi.string().required().valid(Joi.ref("password")).messages({
    "string.empty": "Confirm Password không được để trống!",
    "any.only": "Confirm Password không trùng khớp!",
  }),
});

export const signInValid = Joi.object({
  email: Joi.string().email().required().messages({
    "string.empty": "Email không được để trống!",
    "string.email": "Email không đúng định dạng!",
  }),
  password: Joi.string().required().min(6).max(255).messages({
    "string.empty": "Password không được để trống!",
    "string.min": "Password phải có ít nhất 6 ký tự!",
    "string.max": "Password không được quá 255 ký tự!",
  }),
});
