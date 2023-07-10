import Joi from "joi";

export const productValidator = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  desc: Joi.string(),
});
