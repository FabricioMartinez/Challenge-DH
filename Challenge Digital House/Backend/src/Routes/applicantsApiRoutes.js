const express= require ('express');
const applicantsApiController = require('../Controller/applicantsApiController');
const router= express.Router();


//Rutas
router.get('/applicants', applicantsApiController.list);
router.get('/applicants/search', applicantsApiController.search)

//ruta de elimiar
router.delete('/applicants/delete/:id', applicantsApiController.delete);
//ruta de crear 
router.post('/applicants/create', applicantsApiController.create);
//ruta de modificar
router.put('/applicants/edit', applicantsApiController.edit);
// Export
module.exports= router;