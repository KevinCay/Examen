let express = require('express');
let router = express.Router();
 
//Importar tablas
const ejemplos = require('../controllers/ejemplo.controller.js');
const usuarios = require('../controllers/usuario.controller.js');
const proyectos = require('../controllers/proyecto.controller.js');
const tareas = require('../controllers/tarea.controller.js');

//Tabla ejemplos
router.post('/api/ejemplos/create', ejemplos.create);
router.get('/api/ejemplos/all', ejemplos.retrieveAllEjemplos);
router.get('/api/ejemplos/buscar/:nombre', ejemplos.getEjemploByName);
router.get('/api/ejemplos/onebyid/:id', ejemplos.getEjemploById);
router.put('/api/ejemplos/update/:id', ejemplos.updateById);
router.delete('/api/ejemplos/delete/:id', ejemplos.deleteById);

//Tabla usuarios
router.post('/api/usuarios/create', usuarios.create);
router.get('/api/usuarios/onebyid/:id', usuarios.getUsuarioById);
router.put('/api/usuarios/update/:id', usuarios.updateById);
router.delete('/api/usuarios/delete/:id', usuarios.deleteById);

//Tabla proyectos
router.post('/api/proyectos/create', proyectos.create);
router.get('/api/proyectos/onebyid/:id', proyectos.getProyectoById);
router.put('/api/proyectos/update/:id', proyectos.updateById);
router.delete('/api/proyectos/delete/:id', proyectos.deleteById);

//Tabla tareas
router.post('/api/tareas/create', tareas.create);
router.get('/api/tareas/onebyid/:id', tareas.getTareaById);
router.put('/api/tareas/update/:id', tareas.updateById);
router.delete('/api/tareas/delete/:id', tareas.deleteById);


module.exports = router;