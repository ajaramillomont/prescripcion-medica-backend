const Joi = require('joi');
const id = Joi.number().integer();
const nombre = Joi.string().min(8);
const correo = Joi.string().email();
const mensaje = Joi.string().min(10);

const createContactSchema = Joi.object({
    nombre: nombre.required(),
    correo: correo.required(),
    mensaje: mensaje.required()
});

const updateContactSchema = Joi.object({
    nombre,
    correo,
    mensaje
});

const getContactSchema = Joi.object({
    id: id.required(),
})

module.exports = { getContactSchema, createContactSchema, updateContactSchema };