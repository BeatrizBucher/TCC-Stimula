import './paginas/Tarefas/Tarefas.css';
import { useState, useEffect } from "react";
import axios from 'axios';
import { notificacao, semAtividades } from "./Notificacoes";
import { Link } from 'react-router-dom';

function MainTarefas() {
    const [tarefas, setTarefas] = useState([]);

    useEffect(() => {
        getTarefas();
    }, []);

    async function getTarefas() {

        const idUsuario = localStorage.getItem('id');

        try {
            const resposta = await axios.get(`http://localhost:3001/listarDemandaUsuario?id=${encodeURIComponent(idUsuario)}`);
            const dados = await resposta.data;

            console.log(dados);

            if (dados.length === 0) {
                semAtividades();
            }
            else {
                setTarefas(dados);
            }
        }
        catch (erro) {
            alert("Não foi possível carregar as tarefas.");
        }
    }

    const handleDelete = async (id) => {
        console.log(id)
        if (window.confirm("Tem certeza que deseja excluir esta demanda?")) {
            try {
                const response = await axios.delete(`http://localhost:3001/deletarDemanda/${id}`);

                if(response.status === 200){
                    getTarefas();
                }

            } catch (error) {
                console.error("Erro ao excluir tarefa:", error);
            }
        }
    };

    return (
        <main className="col-md-12 ms-sm-auto col-lg-12 px-md-4 container-fluid d-flex flex-column align-items-center">
            <div className="container mt-5">
                <div className="tabela-card shadow mb-5">
                    <table className="table mb-0">
                        <thead className="cabecalho-tabela">
                            <tr>
                                <th scope="col">Paciente:</th>
                                <th scope="col">Terapeuta:</th>
                                <th scope="col">Atividade:</th>
                                <th scope="col">Ações:</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tarefas.map((cliente) => (
                                <tr key={cliente.id}>
                                    <td>{cliente.Nome}</td>
                                    <td>{cliente.Terapeuta}</td>
                                    <td>{cliente.Atividade}</td>

                                    <td className="acoes-botoes">
                                        <Link to={`/editar-demanda/${cliente.DemandaID}`} title="Editar" className="icon-botao">
                                            <i className="bi bi-pencil-square"></i>
                                        </Link>
                                        <button onClick={() => handleDelete(cliente.DemandaID)} title="Excluir" className="icon-botao">
                                            <i className="bi bi-trash2-fill"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}

export default MainTarefas;




