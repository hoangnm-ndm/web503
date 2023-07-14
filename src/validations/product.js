import joi from "joi"

const productValidators = joi.object({
    name: joi.string().required().min(6).max(255),
    price: joi.number().required().min(0),
    desc: joi.string()
}).options({
    abortEarly: false,
})

export default productValidators