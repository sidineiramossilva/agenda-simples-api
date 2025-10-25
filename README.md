# Agenda Simples API

API REST para agendamento simples entre clientes e prestadores de serviço.

## Funcionalidades
- Registro de prestadores
- Registro de clientes
- Registro de horários de atendimento
- Registro de agendamentos
- Busca de prestadores
- Busca de dados do cliente
- Autenticação via JWT
- Documentação Swagger

## Instalação

```bash
npm install
```

## Execução

```bash
npm start
```

A API estará disponível em `http://localhost:3000`.

## Documentação

Acesse a documentação Swagger em: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Endpoints principais

- `POST /api/login` — Login de usuário (instrutor, cliente, prestador)
- `POST /api/prestador` — Registrar prestador
- `GET /api/prestadores` — Buscar prestadores (autenticado)
- `POST /api/cliente` — Registrar cliente
- `GET /api/cliente/{id}` — Buscar cliente por ID (autenticado)
- `POST /api/horario` — Registrar horário de atendimento do prestador (autenticado)
- `POST /api/agendamento` — Registrar agendamento (autenticado)
- `GET /api/agendamentos/{clienteId}` — Buscar agendamentos do cliente (autenticado)

## Regras de negócio
- Um prestador não pode ter dois agendamentos no mesmo dia e hora
- Um cliente não pode ter dois agendamentos no mesmo dia e hora
- Não permitir agendamentos em datas passadas
- Permitir apenas horários disponíveis definidos pelo prestador
- Cliente apenas consulta seus agendamentos
- Prestadores acessam todas as funcionalidades

## Estrutura do projeto
- `routes/` — Rotas da API
- `controllers/` — Lógica dos endpoints
- `service/` — Serviços e middlewares
- `model/` — Modelos e banco de dados em memória
- `recursos/` — Documentação Swagger

## Autenticação
Utilize o endpoint `/api/login` para obter o token JWT. Envie o token no header `Authorization: Bearer <token>` para acessar endpoints protegidos.

## Banco de dados
Os dados são armazenados em memória, sem persistência.
