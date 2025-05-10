const { config } = require('./../config/config');
const { Sequelize } = require('sequelize');
const setupModels = require('./../db/models/index');

const URI = `postgres://${config.dbUser}:${config.dbPassword}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
    dialect: 'postgres',
    logging: console.log
});

//Inicializamos los modelos
setupModels(sequelize);


module.exports = sequelize;
