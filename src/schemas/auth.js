import joi from "joi";
export const signupSchema = joi.object({
  name: joi.string(),
  email: joi.string().email().required().messages({
    "string.email": "Email invalid",
    "string.empty": "Email is not empty",
    "string.required": "Email is required",
  }),
  password: joi.string().required().min(6).messages({
    "string.empty": "Password is not empty",
    "any.required": "Password is required",
    "string.min": "Password must have at least {#limit} characters",
  }),
  confirmPassword: joi.string().valid(joi.ref("password")).required().messages({
    "any.only": "Password is not match",
    "string.empty": "Confirm password is not empty",
    "string.required": "Confirm password is required",
  }),
});
