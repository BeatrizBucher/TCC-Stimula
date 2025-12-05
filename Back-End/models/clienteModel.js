const executeQuery = require('../database/query')
const bcrypt = require('bcrypt');

const Cliente = {

    //ok
    criarCliente: async (nome_completo, cpf, email, cep, logradouro, cidade, uf, observacao, regra, senha) => {

        try {
            // const password = await bcrypt.hash(senha, 10);

            const result = await executeQuery(
                `INSERT INTO cliente (
                    nome_completo, cpf, email, cep, logradouro, cidade, uf, observacao, regra, senha
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [nome_completo, cpf, email, cep, logradouro, cidade, uf, observacao, regra, senha]
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

  

    
    
}
module.exports = Cliente;
