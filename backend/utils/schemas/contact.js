const joi = require('@hapi/joi')

const contactNameSchema = joi.string().max(50)
const contactEmailSchema = joi.string().max(30)
const contactStateSchema = joi.string().max(30)
const contactCitySchema = joi.string().max(50)

const createContactSchema = {
    name: contactNameSchema,
    email: contactEmailSchema,
    state: contactStateSchema,
    city: contactCitySchema
}

module.exports = { createContactSchema }