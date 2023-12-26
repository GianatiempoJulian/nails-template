const mongoose = require('mongoose');

const dbConnect = () => {
    mongoose
        .connect(process.env.MONGODB_URL)
        .then(() => {
            console.log('Conexión existosa a BD')
        }).catch((err) => {
            console.log("Error al intentar conectar", { err });
        });
}

module.exports = dbConnect;