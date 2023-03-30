import Joi from "joi";

export const productSchema = Joi.object({
  name: Joi.string().required().min(3),
  price: Joi.number().required(),
  description: Joi.string(),
});
