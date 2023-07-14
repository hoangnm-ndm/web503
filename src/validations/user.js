import joi from "joi"

const userValidators = joi.object({
    name: joi.string().required().min(6).max(255),
    username: joi.string().required().min(6).max(255),
    email: joi.string().email({ tlds: { allow: false } }),
    phone: joi.string().required()
}).options({
    abortEarly: false,
})

export default userValidators