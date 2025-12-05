const clienteController = require('../models/clienteModel');
const gerarSenha = require('../services/credenciais');
const enviarEmail = require('../services/emailServices');

const ControllerCliente = {

    async cadastrarNovoCliente(req, res) {

        try {
            const { nome_completo, cpf, email, cep, logradouro, cidade, uf, observacao, regra, senha } = req.body;

            const password = gerarSenha();

            const novoCliente = await clienteController.criarCliente(
                nome_completo, cpf, email, cep, logradouro, cidade, uf, observacao, regra, password
            );

            await enviarEmail(email, password)

            res.status(201).json({ mensagem: "Cadastrado com sucesso Email e Senha enviado por email!" });

        } catch (error) {
            res.status(500).json({ mensagem: error.message });
        }
    },

    listarTodos: async (req, res) => {

        try {
            const resultado = await clienteController.buscarTodosProdutos();
            res.status(200).json(resultado);
        }
        catch (error) {
            res.status(500).json({ mensagem: error.message });
        }

    },

}

module.exports = ControllerCliente;