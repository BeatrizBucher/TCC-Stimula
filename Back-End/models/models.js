const executeQuery = require('../database/query')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const Usuarios = {

    // cadastrar e login
    registrarUsuarios: async (nome, sobrenome, regra, email, senha) => {

        try {

            const password = await bcrypt.hash(senha, 10);
            return await executeQuery(
                'INSERT INTO usuarios (nome, sobrenome, regra, email, senha) VALUES (?,?,?,?,?)',
                [nome, sobrenome, regra, email, password]
            );
        }
        catch (error) {
            throw error;
        }
    },

    login: async (email, senha) => {
        try {
            const consulta = await Usuarios.getEmail(email);

            if (consulta.length > 0) {

                const vereficar = await bcrypt.compare(senha, consulta[0].senha);
                const validarSenha = await senha === consulta[0].senha

                if (vereficar || validarSenha) {

                    const token = jwt.sign(
                        { id: consulta[0].id, email: consulta[0].email, regra: consulta[0].regra },
                        process.env.JWT_SECRET,
                        { expiresIn: '25m' }
                    );
                    return { token, regra: consulta[0].regra, id: consulta[0].id, mudar_senha: consulta[0].mudar_senha };

                }

                return null;
            }
            return null;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    getEmail: async (email) => {
        try {
            return await executeQuery('SELECT id, email, senha, regra, mudar_senha FROM cliente WHERE email=?', [email])

        }
        catch (error) {
            console.log(error);

        }
    },

    resetarSenha: async (email, senha) => {
        try {

            const hash = await bcrypt.hash(senha, 10);
            return await executeQuery('UPDATE cliente SET senha=?, mudar_senha=0 WHERE email=?', [hash, email])
        }
        catch (error) {
            throw error;
        }
    }
};

module.exports = Usuarios;