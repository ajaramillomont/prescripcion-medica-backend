const Joi = require('joi');
const id = Joi.number().integer();
const nombres = Joi.string().min(8);
const apellidos = Joi.string().min(8);
const email = Joi.string().email();
const direccion = Joi.string().max(200);
const telefono = Joi.string();

const createCustomerSchema = Joi.object({
    nombres: nombres.required(),
    apellidos: apellidos.required(),
    email: email.required(),
    direccion: direccion.required(),
    telefono: telefono.required()
});

const updateCustomerSchema = Joi.object({
    nombres,
    apellidos,
    email,
    direccion,
    telefono
});

const getCustomerSchema = Joi.object({
    id: id.required(),
})

module.exports = { getCustomerSchema, createCustomerSchema, updateCustomerSchema };