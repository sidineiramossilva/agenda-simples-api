const { clientes } = require('../model/banco');

function registrarCliente(req, res) {
  const { usuario, senha, nome } = req.body;
  if (!usuario || !senha || !nome) {
    return res.status(400).json({ erro: 'Dados obrigatórios ausentes' });
  }
  if (clientes.find(c => c.usuario === usuario)) {
    return res.status(409).json({ erro: 'Usuário já cadastrado' });
  }
  const novoCliente = {
    id: clientes.length + 1,
    usuario,
    senha,
    nome,
    tipo: 'cliente'
  };
  clientes.push(novoCliente);
  res.status(201).json(novoCliente);
}

function buscarCliente(req, res) {
  const { id } = req.params;
  const cliente = clientes.find(c => c.id == id);
  if (!cliente) return res.status(404).json({ erro: 'Cliente não encontrado' });
  res.json(cliente);
}

module.exports = { registrarCliente, buscarCliente };
