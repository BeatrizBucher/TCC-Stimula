const express = require('express');
const usuarioController = require('../controller/controller');
const clienteController = require('../controller/clienteController');
const demandaController = require('../controller/demandaController');
const contatoController = require('../controller/contatoController');
const routers = express.Router();

// login
routers.post('/cadastrar', usuarioController.cadastrarUsuarios);
routers.post('/login', usuarioController.LoginUsuario);
// atualizar senha do usuario do login
routers.post('/atualiza', usuarioController.verificarEmail);
routers.patch('/atualizasenha', usuarioController.atualizarSenha);

// cliente
routers.post('/cadastroCliente', clienteController.cadastrarNovoCliente); //ok
routers.get('listarCliente', clienteController.listarTodos );
routers.delete('deletarcliente/:id', clienteController.deletarId);
routers.put('/atualizarCliente/:id', clienteController.atualizarId);

// demanda
//Rota para listar as tarefas'
routers.get('/listarDemandaUsuario', demandaController.listarTarefas);




routers.get('/listarDemandas', demandaController.getlistarDemandas);
routers.get('/listarporid/:id', demandaController.BuscarClientePorId); 
routers.post('/cadastroDemanda', demandaController.criarDemanda); 
routers.get('/listarNomeCliente', demandaController.listarNomesCliente); //ok
routers.get('/listarAtividades', demandaController.listarTodasAtividades); //ok
routers.get('/listarTerapeutas', demandaController.listarTodosTerapeutas); //ok
routers.get('/listarDemandaID/:id', demandaController.listarTodasDemandasID);//ok
routers.delete('/deletarDemanda/:id', demandaController.deletarId); //ok
routers.put('/atualizarDemanda/:id', demandaController.atualizarDemanda);
routers.get('/listarDemandaPorId/:id', demandaController.getDemandaPorId);

//contato
routers.post('/cadastrarMensagem', contatoController.criarNovaMensagem);


module.exports = routers;