const { config } = require('./../config/config');
function logErrors(error, req, res, next) {
    console.log('[Error]', error);
    next(error);    
}

function errorHandler(error, req, res, next) {
    res.status(500).json({
        message: error.message,
        stack: config.env === 'development'?error.stack:undefined
    })
    console.log('Aquí si entre');
    
}

function boomErrorHandler(error, req, res, next) {
    if(error.isBoom) {
        const { output } = error;
        return res.status(output.statusCode).json(output.payload);
    }
    console.log('Boom error atrapado');
    
    next(error);
}

module.exports = { logErrors, errorHandler, boomErrorHandler };