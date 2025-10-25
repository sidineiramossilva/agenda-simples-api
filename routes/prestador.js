const express = require('express');
const { registrarPrestador, buscarPrestadores } = require('../controllers/prestadorController');
const { autenticarToken } = require('../service/auth');
const router = express.Router();

router.post('/prestador', registrarPrestador);
router.get('/prestadores', autenticarToken, buscarPrestadores);

module.exports = router;
