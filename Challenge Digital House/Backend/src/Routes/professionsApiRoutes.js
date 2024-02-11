const express = require('express')
const router = express.Router();
const professionController = require('../Controller/professionsApiController');

router.get('/professions',professionController.list)
router.get('/professions/search', professionController.search)

module.exports = router;