const express = require('express');
const usuarioController = require('../controller/controller');
const clienteController = require('../controller/clienteController');
const demandaController = require('../controller/demandaController');
const contatoController = require('../controller/contatoController');
const routers = express.Router();

// login
routers.post('/login', usuarioController.LoginUsuario);
// atualizar senha do usuario do login
routers.post('/atualiza', usuarioController.verificarEmail);
routers.patch('/atualizasenha', usuarioController.atualizarSenha);

// cliente
routers.post('/cadastroCliente', clienteController.cadastrarNovoCliente); 
routers.get('listarCliente', clienteController.listarTodos );

// demanda
routers.get('/demanda/:id', demandaController.listarTodasDemandasID);
routers.get('/listarDemandaUsuario', demandaController.listarTarefas); 
routers.get('/listarDemandas', demandaController.getlistarDemandas);
routers.get('/listarporid/:id', demandaController.BuscarClientePorId); 
routers.post('/cadastroDemanda', demandaController.criarDemanda); 
routers.get('/listarNomeCliente', demandaController.listarNomesCliente); 
routers.get('/listarAtividades', demandaController.listarTodasAtividades); 
routers.get('/listarTerapeutas', demandaController.listarTodosTerapeutas); 
routers.get('/listarDemandaID/:id', demandaController.listarTodasDemandasID);
routers.delete('/deletarDemanda/:id', demandaController.deletarId); 
routers.put('/atualizarDemanda/:id', demandaController.atualizarDemanda);
routers.get('/listarDemandaPorId/:id', demandaController.getDemandaPorId);

//contato
routers.post('/cadastrarMensagem', contatoController.criarNovaMensagem);


module.exports = routers;