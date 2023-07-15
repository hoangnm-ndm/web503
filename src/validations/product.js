import Joi from 'joi'

const productSchema = Joi.object({
    name: Joi.string().required().min(6).max(255),
    desc: Joi.string(),
    price: Joi.number().required().min(0)
}).options({ 
    abortEarly: false
})
export default productSchema