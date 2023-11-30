import Joi from "joi";

export const signUpValid = Joi.object({
  userName: Joi.string().required().min(6).max(30).messages({
    "string.base": "Username should be a type of 'text'",
    "string.empty": "Username cannot be an empty field",
    "string.min": "Username should have a minimum length of {#limit}",
    "string.max": "Username should have a maximum length of {#limit}",
    "any.required": "Username is a required field",
  }),
  email: Joi.string().required().email().messages({
    "string.base": "Email should be a type of 'text'",
    "string.empty": "Email cannot be an empty field",
    "string.email": "Email should be a type of 'email'",
    "any.required": "Email is a required field",
  }),
  password: Joi.string().required().min(6).max(30).messages({
    "string.base": "Password should be a type of 'text'",
    "string.empty": "Password cannot be an empty field",
    "string.min": "Password should have a minimum length of {#limit}",
    "string.max": "Password should have a maximum length of {#limit}",
    "any.required": "Password is a required field",
  }),
  confirmPass: Joi.string().required().valid(Joi.ref("password")).messages({
    "string.base": "Confirm password should be a type of 'text'",
    "string.empty": "Confirm password cannot be an empty field",
    "any.only": "Confirm password does not match",
    "any.required": "Confirm password is a required field",
  }),
  role: Joi.string().valid("admin", "member", "host", "sale").messages({
    "string.base": "Role should be a type of 'text'",
    "string.empty": "Role cannot be an empty field",
    "any.only": "Role does not match",
  }),
  updateAt: Joi.string().messages({
    "string.base": "UpdateAt should be a type of 'text'",
  }),
});

export const signInValid = Joi.object({
  email: Joi.string().required().email().messages({
    "string.base": "Email should be a type of 'text'",
    "string.empty": "Email cannot be an empty field",
    "string.email": "Email should be a type of 'email'",
    "any.required": "Email is a required field",
  }),
  password: Joi.string().required().min(6).max(30).messages({
    "string.base": "Password should be a type of 'text'",
    "string.empty": "Password cannot be an empty field",
    "string.min": "Password should have a minimum length of {#limit}",
    "string.max": "Password should have a maximum length of {#limit}",
    "any.required": "Password is a required field",
  }),
  updateAt: Joi.string().messages({
    "string.base": "UpdateAt should be a type of 'text'",
  }),
});
