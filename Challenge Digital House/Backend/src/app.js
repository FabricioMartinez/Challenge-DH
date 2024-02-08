const express = require('express');
const path = require('path');
const app = express ();
const apiApplicants = require('./Routes/applicantsApiRoutes')
const apiProfessions = require('./Routes/professionsApiRoutes')
// URL encode
app.use(express.urlencoded({ extended: false }));



// Llamado a las rutas de APIs
app.use('/api', apiApplicants,apiProfessions)
app.use(express.json());

app.listen(3001, () => console.log("Servidor corriendo en el puerto 3001!"));