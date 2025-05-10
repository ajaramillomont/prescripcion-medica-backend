const express = require('express');
const router = express.Router();
const {getCustomers, getCustomer, createCustomer, updateCustomer, deleteCustomer} = require('./../controllers/customer.controller');
const validatorHandler = require('./../middlewares/validator.handler');
const authJWT = require('./../middlewares/authenticate.handler');
const { getCustomerSchema, createCustomerSchema, updateCustomerSchema } = require('./../schemas/customer.schema');

router.get('/', getCustomers);
router.get('/:id', getCustomer);
router.post('/',
    validatorHandler(createCustomerSchema, 'body'),
    authJWT,
    createCustomer);
router.patch('/:id',
    validatorHandler(updateCustomerSchema, 'params'),
    authJWT, 
    updateCustomer);
router.delete('/:id',
    validatorHandler(getCustomerSchema, 'params'),
    authJWT,
    deleteCustomer);

module.exports = router;