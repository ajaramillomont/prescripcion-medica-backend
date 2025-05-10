const { config } = require('./../config/config'); 
const { User } = require('./../db/models/user.model');
const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
class AuthService {

    async login(correo, password) {
        const user = await User.findOne({ where: {correo} });
        if(!user) {
            throw boom.unauthorized('Usuario incorrecto');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            throw boom.unauthorized('Contraseña incorrecta');
        }
        const token = jwt.sign(
            {id: user.id, correo: user.correo, rol: user.rol}, //payload
            config.jwtSecret,
            { expiresIn: '1h'}
        )

        return {
            user: {
                id: user.id,
                nombre: user.nombre,
                correo: user.correo,
                rol: user.rol
            },
            token
        }
    }

    async sendRecovery(correo) {
        const user = await User.findOne({where: { correo }});
        if(!user) {
            throw boom.notFound('Usuario no encontrado');
        }
        const token = jwt.sign(
            {id: user.id, correo: user.correo, rol: user.rol},
            config.jwtSecret,
            { expiresIn: '15m'}
        );
        const link = `http://localhost:${config.portFront}/reset-password?token=${token}`;
        
        await user.update({ recoveryToken: token });

        const mail = {
            from: config.smtpEmail,
            to: user.correo,
            subject: 'Recuperación de contraseña',
            html: `
                    <h1>Solicitud cambio de contraseña<h1>
                    <a href="${link}">Haz click en este enlace para resetear contraseña</a>
                    <p>Este enlace expira en 15 minutos</p>
                    `
        }
        await this.sendMail(mail);
        return { message: 'Correo de recuperación enviado'};

    }

    async sendMail(infoMail) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: config.smtpEmail,
              pass: config.smtpPassword
            },
          });
          await transporter.sendMail(infoMail);
          return {message: 'Correo enviado'}
    }
    
    async resetPassword(token, newPassword) {
        const payload = jwt.verify(token, config.jwtSecret);

        if(!payload) {
            throw boom.unauthorized('Token invalido');
        }
        const user = await User.findByPk(payload.id);

        if(!user) {
            throw boom.notFound('Usuario no encontrado');
        }

        const hash = await bcrypt.hash(newPassword, 10);
        await user.update({password: hash});
        
        return { message: ' Contraseña actualizada correctamente'};
    }
}

module.exports = AuthService;