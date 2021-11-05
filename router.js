const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hola Express')
})

router.get('/productos', (req, res) => {
    res.send('Listado de productos')
})

router.get('/productos/:nro', (req, res) => {
    res.send('Producto Nro ' + req.params.nro)
})

module.exports = router