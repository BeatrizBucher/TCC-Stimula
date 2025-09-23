const executeQuery = require('../database/query')
const bcrypt = require('bcrypt');

const Cliente = {

    //ok
    criarCliente: async (nome_completo, cpf, email, cep, logradouro, cidade, uf, observacao, regra, senha) => {

        try {
            const password = await bcrypt.hash(senha, 10);

            const result = await executeQuery(
                `INSERT INTO cliente (
                    nome_completo, cpf, email, cep, logradouro, cidade, uf, observacao, regra, senha
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [nome_completo, cpf, email, cep, logradouro, cidade, uf, observacao, regra, password]
            );
    
            return result;
    
        } catch (error) {
            throw error;
        }
    },
    
    buscarTodosProdutos: async () => {
        return await executeQuery(
            'SELECT id, nome, sobrenome, genero, idade, telefone, cpf, email, cep, logradouro, complemento, cidade, uf, observacao, status FROM cliente '
        );
    },

    deletarClienteId: async (id) => {
        try {
            return await executeQuery(
                "DELETE FROM cliente WHERE id = ?", [id]
            );    
        } catch (error) { 
            throw error;
        }
    },

    getClienteById: async (id) => {

        try {
            const cliente = await executeQuery(
                "SELECT id FROM cliente WHERE id=?", [id]
            );
            return cliente;
        }
        catch (error) {
            throw error;
        }
    },

    putAtualizarCliente: async (nome, sobrenome, genero, idade, telefone, cpf, email, cep, logradouro, complemento, cidade, uf, observacao, status, id) => {
        
        try {
            const result = await executeQuery(
                // "UPDATE cliente SET nome=?, sobrenome=?, genero=?, idade=?, telefone=?, cpf=?, email=?, cep=?, logradouro=?, complemento=?, cidade=?, uf=?, observacao=?, status=? WHERE id=?",
                "UPDATE cliente SET nome=?, sobrenome=?, genero=?, idade=?, telefone=?, cpf=?, email=?, cep=?, logradouro=?, complemento=?, cidade=?, uf=?, observacao=?, status=? WHERE id=?",
                [nome, sobrenome, genero, idade,  telefone, cpf, email, cep, logradouro, complemento, cidade, uf, observacao, status, id]
                // [nome, sobrenome, genero, idade, telefone, cpf, email, cep, logradouro, complemento, cidade, uf, observacao, status, id]
            );
            console.log(result);
            //return result;
        }
        catch (error) {
            throw error;
        }
    },
    buscarClientePorId: async (id) => {
        try {
            const [cliente] = await executeQuery('SELECT nome, sobrenome, genero, idade, telefone, cpf, email, cep, logradouro, complemento, cidade, uf, observacao, status FROM Cliente WHERE id = ?', [id]);
            return cliente;
        }
        catch (error) {
            throw error;
        }
    },
    
}
module.exports = Cliente;
