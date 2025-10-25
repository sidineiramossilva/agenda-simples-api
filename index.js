const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

// Swagger setup (will be updated later)
const swaggerDocument = require('./recursos/swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Import routes (to be implemented)
const authRoutes = require('./routes/auth');
app.use('/api', authRoutes);

const prestadorRoutes = require('./routes/prestador');
const clienteRoutes = require('./routes/cliente');
app.use('/api', prestadorRoutes);
app.use('/api', clienteRoutes);

const horarioRoutes = require('./routes/horario');
const agendamentoRoutes = require('./routes/agendamento');
app.use('/api', horarioRoutes);
app.use('/api', agendamentoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
