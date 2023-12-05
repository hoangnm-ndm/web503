import Joi from "joi";
export const signUpValid = Joi.object({
  username: Joi.string().required().min(6),
  email: Joi.string().required().email(),
  password: Joi.string().required().min(6),
  confirmPassword: Joi.string().required().valid(Joi.ref("password")),
});

export const signInValid = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required().min(6),
});
