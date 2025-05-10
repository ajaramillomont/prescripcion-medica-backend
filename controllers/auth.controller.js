const AuthService = require('./../services/auth.service');
const service = new AuthService();

const login = async(req,res,next) => {
    try {
        const { correo, password } = req.body;
        const respuesta = await service.login(correo, password);
        res.json(respuesta);
    } catch (error) {
        next(error);
    }
}

const sendRecovery = async(req, res, next) => {
    try {
        const { correo } = req.body;
        const respuesta = await service.sendRecovery(correo);
        res.json(respuesta);
    } catch (error) {
        next(error);
    }
}

const resetPassword = async(req, res, next) => {
    const { token, newPassword, confirmPassword} = req.body;
    if(newPassword!= confirmPassword) {
        res.status(400).json({message: 'Las contraseñas no coinciden'});
    }
    const respuesta = await service.resetPassword(token, newPassword);
    res.json(respuesta);
}

module.exports = { login, sendRecovery, resetPassword };