import './paginas/Tarefas/Tarefas.css';
import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

function MainTarefas() {
    const [tarefas, setTarefas] = useState([]);
    const [id, setId] = useState('')

    useEffect(() => {
        const idUsuario = localStorage.getItem('id');
        if (idUsuario) {
            setId(idUsuario);
        }
    }, []);

    useEffect(() => {
        if (!id) return;
        async function getTarefas() {
            try {
                const resposta = await fetch(`http://localhost:3001/listarTarefas?id=${encodeURIComponent(id)}`);
                const dados = await resposta.json();
                setTarefas(dados);
            }
            catch (erro) {
                alert("Não foi possível carregar as tarefas.");
            }
        }

        getTarefas();
    }, [id]);

    const handleDelete = async (id) => {
        if (window.confirm("Tem certeza que deseja excluir esta demanda?")) {
            try {
                await axios.delete(`http://localhost:3001/deletarDemanda/${id}`);
                setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
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
                                <th scope="col">Status:</th>
                                <th scope="col">Ações:</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tarefas.map((cliente) => (
                                <tr key={cliente.id}>
                                    <td>{cliente.Nome}</td>
                                    <td>{cliente.Terapeuta}</td>
                                    <td>{cliente.Atividade}</td>
                                    <td>
                                        <div>
                                            <select  >
                                                <option >
                                                    <button >
                                                        Pendente
                                                    </button>
                                                </option>
                                                <option >
                                                    <button >
                                                        Andamento
                                                    </button>
                                                </option>
                                                <option >
                                                    <button >
                                                        Concluído
                                                    </button>
                                                </option>
                                            </select>
                                        </div>
                                    </td>
                                    <td className="acoes-botoes">
                                        <Link to={`/editar-demanda/${cliente.id}`} title="Editar" className="icon-botao">
                                            <i className="bi bi-pencil-square"></i>
                                        </Link>
                                        <button onClick={() => handleDelete(cliente.id)} title="Excluir" className="icon-botao">
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




