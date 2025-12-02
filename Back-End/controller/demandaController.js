const cliente = require('../config/db');
const demandaController = require('../models/contratoModel');

const ControllerContrato = {

    //ok
    BuscarClientePorId: async (req, res) => {
        const { id } = req.params;

        try {
            const cliente = await demandaController.buscarPorId(id);

            console.log(cliente)

            if (!cliente) {
                return res.status(404).json({ mensagem: "Cliente não encontrado" });
            }

            res.status(200).json({ nome: cliente.nome_completo });
        } catch (error) {
            res.status(500).json({ mensagem: error.message });
        }
    },

    //ok
    criarDemanda: async (req, res) => {
        try {

            const { cliente_id, terapeuta_id, atividade_id } = req.body;

            if (!terapeuta_id || !atividade_id || !cliente_id) {
                return res.status(400).json({ msg: "Dados inválidos" });
            }

            const resultado = await demandaController.postcriarDemanda(cliente_id, terapeuta_id, atividade_id);

            if (resultado.affectedRows === 0) {
                return res.status(404).json({ msg: "Demanda não encontrada" });
            }
            res.status(200).json({ msg: "Demanda cadastrada com sucesso!" });
        }
        catch (error) {
            res.status(500).json({ mensagem: error.message });
        }
    },

    //cliente nomes
    //ok
    listarNomesCliente: async (req, res) => {
        try {
            const resultado = await demandaController.buscarTodosNomesClientes();
            res.status(200).json(resultado);
        } catch (error) {
            res.status(500).json({ mensagem: error.message });
        }
    },

    //ok
    listarTodasDemandasID: async (req, res) => {
        const { id } = req.params;

        try {
            const resultado = await demandaController.buscarTodasDemandasID(id);
            res.status(200).json(resultado);
        } catch (error) {
            res.status(500).json({ mensagem: error.message });
        }
    },

    //atividade nomes
    //ok
    listarTodasAtividades: async (req, res) => {
        try {
            const resultado = await demandaController.buscarTodasAtividades();
            res.status(200).json(resultado);
        } catch (error) {
            res.status(500).json({ mensagem: error.message });
        }
    },

    //terapeuta nomes
    //ok
    listarTodosTerapeutas: async (req, res) => {
        try {
            const resultado = await demandaController.buscarTodosTerapeutas();
            res.status(200).json(resultado);
        } catch (error) {
            res.status(500).json({ mensagem: error.message });
        }
    },

    getlistarDemandas: async (req, res) => {
        try {
            const resultado = await demandaController.buscarDemandas();
            res.status(200).json(resultado);
        } catch (error) {
            res.status(500).json({ mensagem: error.message });
        }

    },


    //ok
    deletarId: async (req, res) => {
        try {
            const id = req.params.id;

            if (!id) {
                return res.status(400).json({ msg: "ID inválido" });
            }

            const resultado = await demandaController.deletarDemandaId(id);

            if (resultado.affectedRows === 0) {
                return res.status(404).json({ msg: "Demanda não encontrado" });
            }

            res.status(200).json({ msg: "Demanda deletada com sucesso" });
        } catch (error) {

            res.status(500).json({ mensagem: error.message });
        }
    },

    atualizarDemanda: async (req, res) => {
        try {
            const { cliente_id, terapeuta_id, atividade_id } = req.body;

            if (!terapeuta_id || !atividade_id || !cliente_id) {
                return res.status(400).json({ msg: "Dados inválidos" });
            }

            const demandaExiste = await demandaController.listarPorID(req.params.id);

            if (demandaExiste.length === 0) {
                return res.status(404).json({ msg: `O ID ${req.params.id} não existe na base de dados` });
            }

            const clienteExiste = await demandaController.validarCliente(cliente_id);
            if (clienteExiste.length === 0) {
                return res.status(400).json({ msg: `O cliente ${cliente_id} não existe` });
            }

            await demandaController.putAtualizarDemanda(cliente_id, terapeuta_id, atividade_id, req.params.id);
            res.status(200).json({ msg: "Demanda atualizada com sucesso!!!" });
        } catch (error) {
            res.status(500).json({ mensagem: error.message });
        }
    },

    //get atividade por id
    listarTarefas: async(req,res)=>{
        console.log(req.query);
         try { 
            const [produtos] = await demandaController.buscarAtividadePorId(req.query);

            console.log(produtos);

            res.status(200).json(produtos);
        } catch (erro) {
            console.error(erro);
            res.status(500).json({ success: false, message: 'Erro ao buscar produtos' });
        }
    },

    //ok
    getDemandaPorId: async (req, res) => {
        const { id } = req.params;

        console.log(id);

        try {
            const contrato = await demandaController.buscarContratoPorId(id);

            if (!contrato) {
                return res.status(404).json({ mensagem: "Contrato não encontrado" });
            }

            res.status(200).json(contrato);
        } catch (error) {
            res.status(500).json({ mensagem: error.message });
        }
    },

}

module.exports = ControllerContrato;