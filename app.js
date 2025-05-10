const express = require('express');
require('dotenv').config();
const sequelize = require('./db');
const routerAuth = require('./routes/auth.route');
const routerUser = require('./routes/user.route');
const routerCustomer = require('./routes/customer.route');
const routerContact = require('./routes/contact.route');
const routerPrescription = require('./routes/prescription-medical.route');
const routerPatient = require('./routes/patient.route');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');
const cors = require('cors');

const port = process.env.PORT;
//app express
const app = express();

//permitimos solo el front de angular

const allowedOrigin =
  process.env.NODE_ENV === 'production'
    ? 'http://localhost:8080'  // o el dominio real
    : 'http://localhost:4200';
app.use(cors({
    origin: allowedOrigin
}));

app.use(express.json());

//rutas
app.use('/auth', routerAuth);
app.use('/users', routerUser);
app.use('/customers', routerCustomer);
app.use('/contact', routerContact);
app.use('/prescriptions', routerPrescription);
app.use('/patients', routerPatient);
app.get('/', (req, res) => {
    res.send('Bienvenido al servidor para el sistema prescripción médica');
});

//middlewares 
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

//servidor escuchando
app.listen(port, () => {
    console.log(`Server corriendo en el puerto ${port}`);
});

( async () => {
    try {
        await sequelize.authenticate();
        console.log(' Conexión a la base de datos exitosa');
        await sequelize.sync();
        console.log('Tablas sincronizadas correctamente');
        
    } catch (error) {
        console.log('No se pudo sincronizar con la base de datos: ', error);
    }
})();