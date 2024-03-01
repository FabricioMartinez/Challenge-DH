const express = require('express');
const path = require('path');
const app = express ();
const apiApplicants = require('./Routes/applicantsApiRoutes')
const apiProfessions = require('./Routes/professionsApiRoutes')
// URL encode
app.use(express.urlencoded({ extended: false }));
//
// Aquí estoy disponiendo la posibilidad para utilizar el seteo en los formularios para el uso de los métodos put o delete
//app.use(methodOverride('_method'));

// URL encode - Para que nos pueda llegar la información desde el formulario al req.body
//app.use(express.urlencoded({ extended: false }));
//

// Llamado a las rutas de APIs
app.use('/api', apiApplicants,apiProfessions)
app.use(express.json());

app.listen(3001, () => console.log("Servidor corriendo en el puerto 3001!"));