const express = require('express');
const { login, sendRecovery, resetPassword } = require('./../controllers/auth.controller');
const authenticateHandler = require('./../middlewares/authenticate.handler');
const { sendRecoverySchema, resetPasswordSchema } = require('./../schemas/auth.schema');
const validatorHandler = require('./../middlewares/validator.handler');
const router = express.Router();

router.post('/login', login);
router.post(
    '/send-recovery', 
    validatorHandler(sendRecoverySchema, 'body'),
    sendRecovery
);
router.patch(
    '/reset-password', 
    validatorHandler(resetPasswordSchema, 'body'),
    resetPassword
);

module.exports = router;