const express = require('express');
const path = require('path');
const app = express ();
const apiApplicants = require('./Routes/applicantsApiRoutes');
const apiProfessions = require('./Routes/professionsApiRoutes');
const cors= require('cors');
// URL encode
app.use(express.urlencoded({ extended: false }));
//
// Aquí estoy disponiendo la posibilidad para utilizar el seteo en los formularios para el uso de los métodos put o delete
//app.use(methodOverride('_method'));


let corsOptions={
    origin: "*"
};

app.use(cors(corsOptions));



// Llamado a las rutas de APIs
app.use('/api', apiApplicants,apiProfessions);
app.use(express.json());

app.listen(3001, () => console.log("Servidor corriendo en el puerto 3001!"));