const cliente = require('../config/db');
const demandaController = require('../models/contratoModel');

const ControllerContrato = {

    BuscarClientePorId: async (req, res) => {
        const { id } = req.params;

        try {
            const cliente = await demandaController.buscarPorId(id);

            console.log(cliente)

            if (!cliente) {
                return res.status(404).json({ mensagem: "Cliente não encontrado" });
            }

            res.status(200).json({ nome: cliente.nome_completo});
        } catch (error) {
            res.status(500).json({ mensagem: error.message });
        }
    },

    criarDemanda: async (req, res) => {
        try {

            const { cliente_id, terapeuta_id, atividade_id} = req.body;

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

    listarTodasDemandas: async (req, res) => {
        const {id} = req.params;

        try {
            const resultado = await demandaController.buscarTodasDemandas(id);
            res.status(200).json(resultado);
        } catch (error) {
            res.status(500).json({ mensagem: error.message });
        }
    },

    //nao alterei dq pra baixo
    deletarId : async (req, res) => {
        try {
            const id = req.params.id;
            
            if (!id) {
                return res.status(400).json({ msg: "ID inválido" });
            }
    
            const resultado = await demandaController.deletarDemandaId(id);
    
            if (resultado.affectedRows === 0) { 
                return res.status(404).json({ msg: "Contrato não encontrado" });
            }
    
            res.status(200).json({ msg: "Contrato deletado com sucesso" });
        } catch (error) {
         
            res.status(500).json({ mensagem: error.message });
        }
    },

    //nao alterei
    async atualizarDemandaId(req, res) {
  
        const{cod, status, servicos, pagamento, planos} = req.body;

        const cliente_id = cod;
        const plano_id = planos;
        const servico_id = servicos;
        const pagamento_id = pagamento

        console.log("aqui");
        console.log(req.body);

        try {
            if (!req.params.id) {
                return res.status(400).json({ mensagem: 'ID inválido' });
            }

            const cliente = await demandaController.getContratoById(req.params.id);

            if (cliente.length > 0) {
                await demandaController.putAtualizarContrato(cliente_id, plano_id, servico_id, pagamento_id, status, req.params.id);
                res.status(200).json({ mensagem: 'Atualizado com sucesso' });
            }
            else{
                return res.status(404).json({ mensagem: 'Contrato não encontrado' });
            }   
        } catch (error) {
            res.status(500).json({ mensagem: error.message });
        }
    },

    //nao alterei
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