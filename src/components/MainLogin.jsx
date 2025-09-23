import React, {useState} from "react"; 
import { Link, useNavigate } from "react-router-dom";
import './paginas/Login/Login.css'
import axios from 'axios';


function MainLogin() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erroMensagem, setMensagem] = useState('');
    const navigate = useNavigate();

    const handleLogin = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/login', {email, senha});

            console.log(response.data.token);

            if(response.status === 200) {
                const accessToken = response.data.token;
                const nome = response.data.nome;
                const regra = response.data.regra;
                
                localStorage.setItem('regra',regra);
                localStorage.setItem('token',accessToken);
                localStorage.setItem('nome',nome);
              
                if(regra === 'admin'){
                    navigate('/home')
                }
                else{
                    navigate('/cadastrar-cliente');
                }
                
            }
        }
        catch(error) {
            setMensagem('Email ou senha incorretos')
  
        }
    }

    return (
        <div className="container justify-content-center align-items-center d-flex vh-100">
            <div className="form- bg-light p-5 rounded shadow">
                <form className="form" onSubmit={handleLogin}>
                    {erroMensagem && <p className="error-message">{erroMensagem}</p>}
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