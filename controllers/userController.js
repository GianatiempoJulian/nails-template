const { User } = require('../models/user');

//* Crear Usuario *//
const create = function(req, res) {
    const body = req.body
    User.create({
            name: body.name,
            lastname: body.lastname,
            email: body.email,
            password: body.password,
            isAdmin: body.isAdmin
        })
        .then((createdTask) => {
            res.status(201).json({
                ok: true,
                message: "Tarea creada con éxito",
                data: createdTask,
            })
        })
        .catch((err) => {
            res.status(400).json({ ok: false, message: "Error al crear la tarea" })
        })
}

//* Obtener todos los usuarios *//
const getAll = function(req, res) {

}

//* Eliminar Usuario *//
const remove = function(req, res) {

}

module.exports = { create, getAll, remove };