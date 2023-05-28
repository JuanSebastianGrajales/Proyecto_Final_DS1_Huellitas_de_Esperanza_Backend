const express = require('express');
const app = express();
const puerto = 3000;

//middlewares
app.use(express.json());
//para entienda formularios en json
app.use(express.urlencoded({extended: false}));
//Definición de rutas
app.use(require('./routes/index'));

app.listen(puerto);
console.log(`Server on ${puerto}`);