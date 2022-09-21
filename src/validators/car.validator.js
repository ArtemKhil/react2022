import Joi from "joi";

const carValidator = Joi.object({
    model: Joi.string().regex(/^[a-zA-Z]{1,20}$/).required().messages({
        'string.pattern.base': 'Only letters min 1 letter max 20 letters'
    }),

    price: Joi.number().min(0).max(1000000).required(),

    year: Joi.number().min(1990).max(new Date().getFullYear())

});


export {carValidator};