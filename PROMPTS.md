1. Objetivo
Criar uma API Rest para agendamento simples entre clientes e prestadores de serviço.

2. Contexto
- A API possui as seguintes funcionalidades: registro de prestadores, registro de clientes, registro horarios de atendimento, registro de agendamentos, busca de prestadores e busca de dados do clientes.
- Para que eu possa usar as funcionalidades, preciso fazer login como instrutor.
- Para que o cliente possa criar um agendamento, ele precisa fazer login como cliente. 
- Cliente apenas consultam seus agendamentos, prestadores acessam todas as funcionalidades do sistema.
- Um prestador não pode ter dois agendamentos no mesmo dia e hora.
- Um cliente não pode ter dois agendamentos no mesmo dia e hora.
- A API deve validar antes de criar o agendamento.
- Não permitir agendamentos em datas passadas.  
- Permitir apenas horários disponíveis definidos pelo prestador. 
- Um cliente pode ter vários agendamentos.
- Um prestador pode atender vários clientes, mas não no mesmo horário.

3. Regras
- Não me pergunte nada, só faça.
- A documentação da API deve ser feita com Swagger, em forma de arquivo, crie esse arquivo em uma pasta de recursos. O swagger precisa descrever o modelo JSON da resposta de cada endpoint com base na forma que API for implementada. O Swagger também deve contemplar os status code de erro que serão implementados na API.
- Adicione um endpoint para renderizar o Swagger.
- Construa um arquivo README para descrever o projeto.
- Divida a API em camadas: routes, controllers, service e model.
- Armazene os dados da API em um banco de dados em memória.
- Utilize a biblioteca express para construir a API Rest.
- Faça com que a autenticação seja parte do Middleware, utilizando token JWT como modelo de autenticação, e implemente as regras de autenticação seguindo as informações descritas no contexto.
- Nome das tabelas do banco de dados em portugues.