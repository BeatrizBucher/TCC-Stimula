import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './paginas/Login/Login.css'
import axios from 'axios';
import { useAuth } from "../components/Context/AuthContext.jsx";

function MainLogin() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erroMensagem, setMensagem] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/login', { email, senha });

            if (response.status === 200) {
                const accessToken = response.data.token;
                const id = response.data.id;
                const nome = response.data.email;
                const regra = response.data.regra;
                const mudar_senha = response.data.mudar_senha;
                console.log(response.data.mudar_senha)

                login(accessToken, nome, regra, id);

                if (mudar_senha === "1") {
                    navigate('/resetarsenha');
                }
                else {
                    navigate('/home');
                }

            }
        }
        catch (error) {
            setMensagem('Email ou senha incorretos')

        }
    }

    return (
        <div className="container justify-content-center align-items-center d-flex vh-100">
            <div className="form- bg-light p-5 rounded shadow">
                {erroMensagem && <p className="error-message">{erroMensagem}</p>}

                <form className="form" onSubmit={handleLogin}>
                    <h1 className="title">LOGIN</h1>

                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="email"
                        />
                    </div>

                    <div className="input-group">
                        <label>Senha</label>
                        <input
                            type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            placeholder="senha"
                        />
                    </div>

                    <button className="button">Entrar</button>

                </form>
            </div>
        </div>
    );
}
export default MainLogin;