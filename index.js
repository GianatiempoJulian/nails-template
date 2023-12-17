const express = require('express');
const app = express();
const PUERTO = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile('..index.html', { root: __dirname })
});

app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`);
});