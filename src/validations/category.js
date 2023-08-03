import Joi from "joi";

const categoryValidator = Joi.object({
  name: Joi.string().required().min(6).max(255),
  slug: Joi.string().required().min(6).max(255),
}).options({
  abortEarly: false,
});

export default categoryValidator;
