const { prestadores } = require('../model/banco');

function registrarPrestador(req, res) {
  const { usuario, senha, nome, servico } = req.body;
  if (!usuario || !senha || !nome || !servico) {
    return res.status(400).json({ erro: 'Dados obrigatórios ausentes' });
  }
  if (prestadores.find(p => p.usuario === usuario)) {
    return res.status(409).json({ erro: 'Usuário já cadastrado' });
  }
  const novoPrestador = {
    id: prestadores.length + 1,
    usuario,
    senha,
    nome,
    servico,
    tipo: 'prestador',
    horarios: []
  };
  prestadores.push(novoPrestador);
  res.status(201).json(novoPrestador);
}

function buscarPrestadores(req, res) {
  res.json(prestadores);
}

module.exports = { registrarPrestador, buscarPrestadores };
