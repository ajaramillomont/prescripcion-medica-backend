const { config } = require('./../config/config');
const { Sequelize } = require('sequelize');
const setupModels = require('./../db/models/index');

//const URI = `postgres://${config.dbUser}:${config.dbPassword}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
console.log('DATABASE_URL:', config.databaseUrl);

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: console.log,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

//Inicializamos los modelos
setupModels(sequelize);


module.exports = sequelize;
