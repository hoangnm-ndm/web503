import Joi from "joi";

export const signUpValid = Joi.object({
  username: Joi.string().required().min(6).max(255),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6).max(255),
  confirmPass: Joi.string().required().valid(Joi.ref("password")),
});

export const signInValid = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6).max(255),
});
