const express = require('express');
const router = express.Router();
const { createMessage } = require('./../controllers/contact.controller');
const validatorHandler = require('./../middlewares/validator.handler');
const { getContactSchema, createContactSchema, updateContactSchema } = require('./../schemas/contact.schema');


router.post('/', 
    validatorHandler(createContactSchema, 'body'),
    createMessage
);

module.exports = router;