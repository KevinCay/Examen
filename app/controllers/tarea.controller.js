const db = require('../config/db.config.js');
const Tarea = db.Tarea;

exports.create = (req, res) => {
    let tarea = {};

    try {
        tarea.nombre = req.body.nombre;
        tarea.estado = req.body.estado;
        tarea.fecha_creacion = req.body.fecha_creacion;
        tarea.fecha_vencimiento = req.body.fecha_vencimiento;

        Tarea.create(tarea).then(result => {
            res.status(200).json({
                message: "tarea creado exitosamente con id = " + result.id_tarea,
                tarea: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "¡Fallo al crear el tarea!",
            error: error.message
        });
    }
};

exports.getTareaById = (req, res) => {
    let tareaId = req.params.id;
    Tarea.findByPk(tareaId)
        .then(tarea => {
            res.status(200).json({
                message: "tarea obtenido exitosamente con id = " + tareaId,
                tarea: tarea
            });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "¡Error al obtener tarea con id!",
                error: error
            });
        });
};

exports.updateById = async (req, res) => {
    try {
        let tareaId = req.params.id;
        let tarea = await Tarea.findByPk(tareaId);
    
        if (!tarea) {
            res.status(404).json({
                message: "No se encontró el tarea para actualizar con id = " + tareaId,
                tarea: "",
                error: "404"
            });
        } else {    
            let updatedObject = {
                nombre: req.body.nombre,
                estado: req.body.estado,  
                fecha_creacion: req.body.fecha_creacion,
                fecha_vencimiento: req.body.fecha_vencimiento
            }
            let result = await Tarea.update(updatedObject, {returning: true, where: {id_tarea: tareaId}});
            
            if (!result) {
                res.status(500).json({
                    message: "No se puede actualizar un tarea con id = " + req.params.id,
                    error: "No se pudo actualizar el tarea",
                });
            };

            res.status(200).json({
                message: "Actualización exitosa de un tarea con id = " + tareaId,
                tarea: updatedObject,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "No se puede actualizar un tarea con id = " + req.params.id,
            error: error.message
        });
    }
};

exports.deleteById = async (req, res) => {
    try {
        let tareaId = req.params.id;
        let tarea = await Tarea.findByPk(tareaId);

        if (!tarea) {
            res.status(404).json({
                message: "No existe el tarea con id = " + tareaId,
                error: "404",
            });
        } else {
            await tarea.destroy();
            res.status(200).json({
                message: "Eliminación exitosa del tarea con id = " + tareaId,
                tarea: tarea,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "No se puede eliminar un tarea con id = " + req.params.id,
            error: error.message,
        });
    }
}