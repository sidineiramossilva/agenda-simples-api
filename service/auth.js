const jwt = require('jsonwebtoken');

const SECRET = 'agenda_simples_secret';

function autenticarToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ erro: 'Token não fornecido' });

  jwt.verify(token, SECRET, (err, usuario) => {
    if (err) return res.status(403).json({ erro: 'Token inválido' });
    req.usuario = usuario;
    next();
  });
}

function gerarToken(usuario) {
  return jwt.sign(usuario, SECRET, { expiresIn: '1h' });
}

module.exports = {
  autenticarToken,
  gerarToken
};
