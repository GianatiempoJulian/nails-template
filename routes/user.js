const express = require('express');
const { create, getAll, remove } = require('../controllers/userController');
const router = express.Router();

//* Crear Usuario *//
router.get("/", create)

//* Obtener todos los usuarios *//
router.get("/users", getAll)

//* Eliminar Usuario *//
router.delete("/:id", remove);

module.exports = router;