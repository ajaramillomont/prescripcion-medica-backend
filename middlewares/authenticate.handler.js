const jwt = require('jsonwebtoken');
const { config } = require('./../config/config');

function authenticateJWT(req, res, next) {
    const authHeader = req.headers.authorization;
    if(!authHeader) {
        return res.status(401).json({
            message: 'Token no proporcionado'
        })
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, config.jwtSecret, (error, user) => {
        if(error) return res.status(401).json({message: 'Token invalido'});
        req.user = user;
        next();
    })
}

//401 Unauthorized → No estás autorizado (token inválido o no enviado).
//403 Forbidden → Sí estás autenticado, pero no tienes permisos suficientes (esto es más para temas de roles).

module.exports = authenticateJWT;