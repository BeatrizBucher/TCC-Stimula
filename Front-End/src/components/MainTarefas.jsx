import './paginas/Tarefas/Tarefas.css'

function MainTarefas() {
    const atividades = [
        { id: 1, paciente: "Victor Augusto", atividade: "Jogo da Memória" },
        { id: 2, paciente: "Victor Augusto", atividade: "Quiz de Português" },
        { id: 3, paciente: "Victor Augusto", atividade: "História" },
    ]

    return (
        <main className="col-md-12 ms-sm-auto col-lg-12 px-md-4 container-fluid d-flex flex-column align-items-center">

             <div className="container mt-5">
                <div className="tabela-card shadow">
                    <table className="table mb-0">
                        <thead className="cabecalho-tabela">
                            <tr>
                                <th scope="col">Paciente</th>
                                <th scope="col">Atividade</th>
                                <th scope="col">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {atividades.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.paciente}</td>
                                    <td>{item.atividade}</td>
                                    <td>
                                        <div className="acoes-botoes">
                                            <button className="btn btn-sm btn-warning">
                                                Concluído
                                            </button>
                                        </div>
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