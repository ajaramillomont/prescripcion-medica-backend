const Joi = require('joi');
const correo = Joi.string().email();
const newPassword = Joi.string().min(6);
const confirmPassword = Joi.string().equal('newPassword');
const token = Joi.string();

const sendRecoverySchema = Joi.object({
    correo: correo.required(),
});

const resetPasswordSchema = Joi.object({
    token: Joi.required(),
    newPassword: Joi.required(),
    confirmPassword: Joi.required()
})
module.exports = { sendRecoverySchema, resetPasswordSchema };