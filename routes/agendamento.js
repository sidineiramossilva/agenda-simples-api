const express = require('express');
const { registrarAgendamento, buscarAgendamentosCliente } = require('../controllers/agendamentoController');
const { autenticarToken } = require('../service/auth');
const router = express.Router();

router.post('/agendamento', autenticarToken, registrarAgendamento);
router.get('/agendamentos/:clienteId', autenticarToken, buscarAgendamentosCliente);

module.exports = router;
