import Joi from "joi";

export const productValid = Joi.object({
  name: Joi.string().required().min(6).max(255).messages({
    "string.base": "Name phải là một chuỗi!",
    "string.empty": "Name không được để trống!",
    "string.min": "Name phải có ít nhất 6 ký tự!",
    "string.max": "Name không được quá 255 ký tự!",
  }),
  price: Joi.number().required().min(0).messages({
    "number.base": "Price phải là một số!",
    "number.empty": "Price không được để trống!",
    "number.min": "Price phải lớn hơn 0!",
  }),
  desc: Joi.string().min(6).messages({
    "string.base": "Desc phải là một chuỗi!",
    "string.empty": "Desc không được để trống!",
    "string.min": "Desc phải có ít nhất 6 ký tự!",
  }),
  _id: Joi.string().messages({
    "string.base": "_id phải là một chuỗi!",
  }),
  createdAt: Joi.string().messages({
    "string.base": "createdAt phải là một chuỗi!",
  }),
  updatedAt: Joi.string().messages({
    "string.base": "updatedAt phải là một chuỗi!",
  }),
});
