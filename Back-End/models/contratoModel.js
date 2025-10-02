const executeQuery = require('../database/query')

const Contrato = {

    buscarPorId: async (id) => {
        try {
            const [cliente] = await executeQuery('SELECT nome_completo FROM cliente WHERE id = ?', [id]);
            return cliente;
        }
        catch (error) {
            throw error;
        }
    },

    postcriarDemanda: async (cliente_id, terapeuta_id, atividade_id) => {
        try {
            const result = await executeQuery(
                `INSERT INTO demanda 
                (cliente_id, terapeuta_id, atividade_id) 
                VALUES (?, ?, ?)`,
                [cliente_id, terapeuta_id, atividade_id]
            );
            return result;
        } catch (error) {
            throw error;
        }
    },

    buscarTodasDemandas: async (id) => {

        console.log(id);
        return await executeQuery(`
           SELECT  
            cliente.nome_completo as Nome, 
            atividade.nome as Atividade, 
            terapeuta.nome as Terapeuta, 
            demanda.id as DemandaID
            FROM demanda
            JOIN cliente ON cliente.id = demanda.cliente_id
                JOIN atividade ON atividade.id = demanda.atividade_id
                    JOIN terapeuta ON terapeuta.id = demanda.terapeuta_id
            WHERE cliente.id = ?
        `,[id]);
    },


    //nao alterei dq pra baixo
    deletarDemandaId: async (id) => {
        try {
            return await executeQuery(
                "DELETE FROM demanda WHERE id = ?", [id]
            );
        } catch (error) {
            throw error;
        }
    },

    getDemandaById: async (id) => {

        try {
            const contrato = await executeQuery(
                "SELECT id FROM contrato WHERE id=?", [id]
            );
            return contrato;
        }
        catch (error) {
            throw error;
        }
    },

    putAtualizarContrato: async (cliente_id, plano_id, servico_id, pagamento_id, status, id) => {

        try {
            const result = await executeQuery(
                "UPDATE contrato SET cliente_id=?, plano_id=?, servico_id=?, pagamento_id=?, status=? WHERE id=?",
                [cliente_id, plano_id, servico_id, pagamento_id, status, id]
            );
            console.log(result);
        }
        catch (error) {
            throw error;
        }
    },
    buscarContratoPorId: async (id) => {
        try {
            const [contrato] = await executeQuery('SELECT cliente_id, plano_id, servico_id, pagamento_id, status FROM contrato WHERE id = ?', [id]);
            return contrato;
        }
        catch (error) {
            throw error;
        }
    },

}
module.exports = Contrato;
