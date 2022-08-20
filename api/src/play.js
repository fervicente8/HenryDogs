'use strict'

const models = require('../models/model')
const express = require('express')

const router = express.Router()

// Escriban sus rutas acá
router.get('/:serie', (req, res) => {
    const { serie } = req.params;
    const { user } = req.query;
    try {
        res.status(200).json({ msg: models.play(serie, user) });
    }
    catch (err) {
        res.status(404).json({ error: err.message });
    }
})
// Siéntanse libres de dividir entre archivos si lo necesitan
// Hint:  investigá las propiedades del objeto Error en JS para acceder al mensaje en el mismo.

module.exports = router