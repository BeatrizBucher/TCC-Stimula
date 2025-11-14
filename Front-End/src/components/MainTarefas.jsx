import './paginas/Tarefas/Tarefas.css'
import React  from "react";
import { Link } from 'react-router-dom';

function MainTarefas() {
    const atividades = [
        { id: 1, paciente: "Victor Augusto", tarapeuta: "Dra. Carla Souza", atividade: "Jogo da Memória" },
        { id: 2, paciente: "Victor Augusto", tarapeuta: "Dra. Carla Souza", atividade: "Quiz de Português" },
        { id: 3, paciente: "Victor Augusto", tarapeuta: "Dra. Carla Souza", atividade: "História" },
    ]

    return (
        <main className="col-md-12 ms-sm-auto col-lg-12 px-md-4 container-fluid d-flex flex-column align-items-center">

            <div className="container mt-5">
                <div className="tabela-card shadow">
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
                            {atividades.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.paciente}</td>
                                    <td>{item.tarapeuta}</td>
                                    <td>{item.atividade}</td>
                                    <td>
                                        
                                        <div className="acoes-status">

                                            <select name="" id="">
                                                <option >
                                                    <button className="btn btn-sm btn-warning text-white">
                                                        Pendente
                                                    </button>
                                                </option>
                                                <option >
                                                    <button className="btn btn-sm btn-warning text-white">
                                                        Andamento
                                                    </button>
                                                </option>
                                                <option >
                                                    <button className="btn btn-sm btn-warning text-white">
                                                        Concluído
                                                    </button>
                                                </option>
                                            </select>
                                        </div>
                                    </td>
                                    
                                    <td className="acoes-botoes">
                                        <Link
                                            // to={`/editar-cliente/${cliente.id}`}
                                            title="Editar"
                                            className="icon-botao "
                                        >
                                            <i className="bi bi-pencil-square"></i>
                                        </Link>
                                        <button
                                            // onClick={() => handleDelete(cliente.id)}
                                            title="Excluir"
                                            className="icon-botao"
                                        >
                                            <i class="bi bi-trash2-fill"></i>
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