const executeQuery = require('../database/query')

const Contrato = {

    //atividade id
    buscarAtividadePorId: async (id) => {
        try {
            const [atividade] = await executeQuery( `SELECT  
            cliente.nome_completo as Nome, 
            atividade.nome as Atividade, 
            terapeuta.nome as Terapeuta, 
            demanda.id as DemandaID
            FROM demanda
            JOIN cliente ON cliente.id = demanda.cliente_id
                JOIN atividade ON atividade.id = demanda.atividade_id
                    JOIN terapeuta ON terapeuta.id = demanda.terapeuta_id
            WHERE cliente.id = ?
        `, [id]);

            return atividade;
        }
        catch (error) {
            throw error;
        }
    },

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

// faça um SELECT `id`, `terapeuta_id`, `atividade_id`, `cliente_id` FROM `demanda` 

buscarDemandas: async () => {
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
        `);
    },

    buscarTodasDemandasID: async (id) => {

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
        `, [id]);
    },

    //buscar todos nomes de clientes
    buscarTodosNomesClientes: async () => {
        return await executeQuery('SELECT nome_completo, id FROM cliente WHERE regra = ? order by nome_completo asc', ['user']);
    },

    // buscar todos terapeutas 
    buscarTodosTerapeutas: async () => {
        return await executeQuery('SELECT nome, id FROM terapeuta order by nome asc');
    },

    // buscar todas atividades
    buscarTodasAtividades: async () => {
        return await executeQuery('SELECT nome, id FROM atividade order by nome asc');
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

    getIdContrato: async (id) => {

        try {
            const contrato = await executeQuery(
                "SELECT id FROM demanda WHERE id=?", [id]
            );
            return contrato;
        }
        catch (error) {
            throw error;
        }
    },

    putAtualizarDemanda: async (cliente_id, terapeuta_id, atividade_id, id) => {
        try {
            const result = await executeQuery(
                `UPDATE demanda 
             SET cliente_id=?, terapeuta_id=?, atividade_id=?
             WHERE id=?`,
                [cliente_id, terapeuta_id, atividade_id, id]
            );
            console.log(result);
        } catch (error) {
            throw error;
        }
    },


    listarPorID: async (id) => {
        try {
            const result = await executeQuery(
                "SELECT * FROM demanda WHERE id=?",
                [id]
            );
            return result;
        } catch (error) {
            throw error;
        }
    },

    validarCliente: async (cliente_id) => {
        try {
            const result = await executeQuery(
                "SELECT id FROM cliente WHERE id=?",
                [cliente_id]
            );
            return result;
        } catch (error) {
            throw error;
        }
    },


}
module.exports = Contrato;
