const express = require('express');
const app = express();
const puerto = 3000;

//middlewares
app.use(express.json());
//para entienda formularios en json
app.use(express.urlencoded({extended: true}));
//comunicacion con frontend
app.use((req,res,next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//Definición de rutas
app.use(require('./routes/index'));


app.listen(puerto);
console.log(`Server on ${puerto}`);