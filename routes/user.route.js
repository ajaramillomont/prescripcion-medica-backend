const express = require('express');
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('./../controllers/user.controller');
const validatorHandler = require('./../middlewares/validator.handler');
const authenticateHandler = require('./../middlewares/authenticate.handler');
const { getUserSchema, createUserSchema, updateUserSchema } = require('./../schemas/user.schema');

const router = express.Router();

router.get('/', getUsers);
router.get(
    '/:id', 
    validatorHandler(getUserSchema, 'params'),
    getUser);
router.post(
    '/',
    validatorHandler(createUserSchema, 'body'), 
    createUser);
router.patch(
    '/:id', 
    authenticateHandler,
    validatorHandler(updateUserSchema, 'body'),
    updateUser);
router.delete(
    '/:id',
    authenticateHandler, 
    deleteUser);

module.exports = router;