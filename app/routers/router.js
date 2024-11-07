const express = require('express');
const router = express.Router();

const juegos = require('../controllers/juego.controller.js');


router.post('/api/juegos/create', juegos.create);
router.get('/api/juegos/all', juegos.retrieveAllJuegos);
router.get('/api/juegos/buscar/:nombre_juego', juegos.getJuegoByName);
router.get('/api/juegos/onebyid/:id', juegos.getJuegoById);
router.put('/api/juegos/update/:id', juegos.updateById);
router.delete('/api/juegos/delete/:id', juegos.deleteById);

module.exports = router;
