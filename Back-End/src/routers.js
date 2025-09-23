const express = require('express');
const usuarioController = require('../controller/controller');
const clienteController = require('../controller/clienteController')
const demandaController = require('../controller/demandaController')
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
routers.get('/listarClientePorId/:id', clienteController.getClientePorId);

// demanda
routers.get('/listarporid/:id', demandaController.BuscarClientePorId); //ok
routers.post('/cadastroDemanda', demandaController.criarDemanda); //ok
routers.get('/listarDemanda', demandaController.listarTodasDemandas);
routers.delete('/deletarDemanda/:id', demandaController.deletarId);
routers.put('/atualizarDemanda/:id', demandaController.atualizarDemandaId);
routers.get('/listarDemandaPorId/:id', demandaController.getDemandaPorId);


module.exports = routers;