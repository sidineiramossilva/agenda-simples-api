const { agendamentos, clientes, prestadores, horarios } = require('../model/banco');

function registrarAgendamento(req, res) {
  const { clienteId, prestadorId, data, hora } = req.body;
  if (!clienteId || !prestadorId || !data || !hora) {
    return res.status(400).json({ erro: 'Dados obrigatórios ausentes' });
  }
  const cliente = clientes.find(c => c.id == clienteId);
  const prestador = prestadores.find(p => p.id == prestadorId);
  if (!cliente) return res.status(404).json({ erro: 'Cliente não encontrado' });
  if (!prestador) return res.status(404).json({ erro: 'Prestador não encontrado' });
  const horarioDisponivel = horarios.find(h => h.prestadorId == prestadorId && h.data === data && h.hora === hora);
  if (!horarioDisponivel) return res.status(400).json({ erro: 'Horário não disponível para o prestador' });
  const agora = new Date();
  const dataAgendamento = new Date(`${data}T${hora}`);
  if (dataAgendamento < agora) return res.status(400).json({ erro: 'Não é permitido agendar em datas passadas' });
  const conflitoPrestador = agendamentos.find(a => a.prestadorId == prestadorId && a.data === data && a.hora === hora);
  if (conflitoPrestador) return res.status(409).json({ erro: 'Prestador já possui agendamento neste horário' });
  const conflitoCliente = agendamentos.find(a => a.clienteId == clienteId && a.data === data && a.hora === hora);
  if (conflitoCliente) return res.status(409).json({ erro: 'Cliente já possui agendamento neste horário' });
  const novoAgendamento = { id: agendamentos.length + 1, clienteId, prestadorId, data, hora };
  agendamentos.push(novoAgendamento);
  res.status(201).json(novoAgendamento);
}

function buscarAgendamentosCliente(req, res) {
  const { clienteId } = req.params;
  const ags = agendamentos.filter(a => a.clienteId == clienteId);
  res.json(ags);
}

module.exports = { registrarAgendamento, buscarAgendamentosCliente };
