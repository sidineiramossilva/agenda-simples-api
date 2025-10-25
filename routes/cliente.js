const express = require('express');
const { registrarCliente, buscarCliente } = require('../controllers/clienteController');
const { autenticarToken } = require('../service/auth');
const router = express.Router();

router.post('/cliente', registrarCliente);
router.get('/cliente/:id', autenticarToken, buscarCliente);

module.exports = router;
