const Joi = require('joi');

const id = Joi.number().integer();
const nombre = Joi.string().min(8);
const correo = Joi.string().email();
const password = Joi.string().min(6);
const rol = Joi.string().valid('medico', 'admin', 'asistente');

const createUserSchema = Joi.object({
    nombre: nombre.required(),
    correo: correo.required(),
    password: password.required(),
    rol: rol.required(),
});

const updateUserSchema = Joi.object({ 
    nombre,
    correo,
    password,
    rol,
});

const getUserSchema = Joi.object({
    id: id.required(),
})

module.exports = { getUserSchema, createUserSchema, updateUserSchema };