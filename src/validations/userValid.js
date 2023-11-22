import Joi from "joi";

export const userValid = Joi.object({
  username: Joi.string().required().min(6).max(255),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
  password: Joi.string().required().min(6).max(30),
  confirmPass: Joi.string().required().valid(Joi.ref("password")),
});
