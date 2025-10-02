const executeQuery = require('../database/query')

const Contato = {

    cadastrarMensagem: async (nome, email, observacao) => {
        try{
            const result = await executeQuery("INSERT INTO contato (nome, email, observacao) values(?,?,?)",
            [nome, email, observacao])
            return result;
        }
        catch(error){
            throw new Error (`Erro ao cadastrar ${error.message}`)
        }
    },

}
module.exports = Contato;
