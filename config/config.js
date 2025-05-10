require('dotenv').config();

const config = {
    port: process.env.PORT,
    portFront: process.env.PORT_FRONT,
    env: process.env.NODE_ENV,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    jwtSecret: process.env.JWT_SECRET,
    smtpEmail: process.env.SMTP_EMAIL,
    smtpPassword: process.env.SMTP_PASSWORD
};

module.exports = { config };


