const contatoModel = require('../models/contatoModel');

const contatoController = {

    criarNovaMensagem: async(req,res) => {
        const {nome, email, observacao} = req.body

        try{
            const cadastro = await contatoModel.cadastrarMensagem(nome, email, observacao); 

            if(cadastro){
                res.status(201).json({msg:"Mensagem criada com sucesso!!!"})
            }
            else{
                res.status(404).json({msg:"Falha ao enviar mensagem"})
            }
        }
        catch(erro){
            console.log(erro)
            res.status(500).json({msg:"Erro ao servidor"})
        }
    },

};

module.exports = contatoController;