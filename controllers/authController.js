const { gerarToken } = require('../service/auth');
const { clientes, prestadores } = require('../model/banco');

// Usuários de exemplo
const instrutores = [
  { id: 1, usuario: 'instrutor', senha: '123', tipo: 'instrutor' }
];

function login(req, res) {
  const { usuario, senha, tipo } = req.body;
  let user;
  if (tipo === 'instrutor') {
    user = instrutores.find(u => u.usuario === usuario && u.senha === senha);
  } else if (tipo === 'cliente') {
    user = clientes.find(u => u.usuario === usuario && u.senha === senha);
  } else if (tipo === 'prestador') {
    user = prestadores.find(u => u.usuario === usuario && u.senha === senha);
  }
  if (!user) return res.status(401).json({ erro: 'Usuário ou senha inválidos' });
  const token = gerarToken({ id: user.id, tipo: user.tipo });
  res.json({ token });
}

module.exports = { login };
