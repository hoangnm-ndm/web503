import Joi from "joi";

export const productValidate = Joi.object({
  name: Joi.string().required().min(3).max(30).messages({
    "string.base": "Name should be a type of 'text'",
    "string.empty": "Name cannot be an empty field",
    "string.min": "Name should have a minimum length of {#limit}",
    "string.max": "Name should have a maximum length of {#limit}",
    "any.required": "Name is a required field",
  }),
  price: Joi.number().required().min(0).messages({
    "number.base": "Price should be a type of 'number'",
    "number.empty": "Price cannot be an empty field",
    "number.min": "Price should have a minimum length of {#limit}",
    "any.required": "Price is a required field",
  }),
  desc: Joi.string().required().min(3).messages({
    "string.base": "Desc should be a type of 'text'",
    "string.empty": "Desc cannot be an empty field",
    "string.min": "Desc should have a minimum length of {#limit}",
    "any.required": "Desc is a required field",
  }),
  updateAt: Joi.string().messages({
    "string.base": "UpdateAt should be a type of 'text'",
  }),
});
