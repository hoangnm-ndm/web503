import Joi from "joi";

const categorySchema = Joi.object(
  {
    name: Joi.string().required(),
  },
  { timestamps: true, versionKey: false }
);

export default categorySchema;
