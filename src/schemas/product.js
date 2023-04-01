import Joi from "joi";

const productSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  description: Joi.string(),
  categoryId: Joi.string().required(),
});

export default productSchema;
