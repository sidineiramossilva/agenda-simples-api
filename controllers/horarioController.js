const { prestadores, horarios } = require('../model/banco');

function registrarHorario(req, res) {
  const { prestadorId, data, hora } = req.body;
  if (!prestadorId || !data || !hora) {
    return res.status(400).json({ erro: 'Dados obrigatórios ausentes' });
  }
  const prestador = prestadores.find(p => p.id == prestadorId);
  if (!prestador) return res.status(404).json({ erro: 'Prestador não encontrado' });
  const horarioExistente = prestador.horarios.find(h => h.data === data && h.hora === hora);
  if (horarioExistente) return res.status(409).json({ erro: 'Horário já cadastrado para este prestador' });
  const novoHorario = { id: horarios.length + 1, prestadorId, data, hora };
  horarios.push(novoHorario);
  prestador.horarios.push({ data, hora });
  res.status(201).json(novoHorario);
}

module.exports = { registrarHorario };
