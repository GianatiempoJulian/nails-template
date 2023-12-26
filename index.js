//! Principal para funcionamiento !//
//!==============================================================!//
require("dotenv").config();
const express = require('express');
const app = express();

//! Base de Datos !//
//!==============================================================!//
const PORT = process.env.PORT || 3000;
const dbConnect = require('./db/connect');
dbConnect();

//! Configuracion vistas estaticas !//
//!==============================================================!//
var path = require('path');
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');




//! Modelos !//
//!==============================================================!//

//! Routers !//
//!==============================================================!//
//? Usuario ?//: 
const userRoutes = require('./routes/user');
app.use("/api/users", userRoutes); // Configuramos para que siempre llame a rutas con ese inicio de URL.

//? Turnos ?//:
const shiftRoutes = require('./routes/shift');
app.use("/api/shifts", shiftRoutes);

//! Desarrollo !//
//!==============================================================!//

//? Rutas de prueba ?//
//?==============================================================?//




//? Escuchamos al servidor ?//
//?==============================================================?//
app.listen(PORT, () => {
    console.log(`El servidor esta escuchando en el puerto ${PORT}`);
});