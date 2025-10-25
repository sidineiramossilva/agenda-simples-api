const express = require('express');
const { registrarHorario } = require('../controllers/horarioController');
const { autenticarToken } = require('../service/auth');
const router = express.Router();

router.post('/horario', autenticarToken, registrarHorario);

module.exports = router;
