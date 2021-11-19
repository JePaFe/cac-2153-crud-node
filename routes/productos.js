const express = require('express')
const router = express.Router()

const { body } = require('express-validator')

const controller = require('../controller')

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/productos/create', controller.create)

router.post('/productos/store', [
    body('name', 'El nombre del producto tiene que tener 3 carateres como minimo')
        .isLength(3).trim().escape(),
    body('descripcion').escape()
], controller.store)

router.get('/productos', controller.index)
router.get('/productos/:nro', controller.show)

module.exports = router