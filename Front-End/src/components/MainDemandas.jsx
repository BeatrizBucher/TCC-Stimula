import './paginas/Demandas/Demandas.css'
import { useState } from "react";


function MainDemanda() {
    const [paciente, setPaciente] = useState("");
    const [atividade, setAtividade] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Paciente: ${paciente}\nAtividade: ${atividade}`);
    };
    return (
        <main className="col-md-12 ms-sm-auto col-lg-12 px-md-4 container-fluid d-flex flex-column align-items-center">

            <div className="container mt-5">
                <h2 className="titulo-principal">
                    Cadastro de atividade
                </h2>
                <div className="caixa-cadastro mx-auto">
                    <form onSubmit={handleSubmit}>
                     
                        <div className="mb-3">
                            <label className="form-label texto-label">Paciente:</label>
                            <select
                                className="form-select campo-input"
                                value={paciente}
                                onChange={(e) => setPaciente(e.target.value)}
                            >
                                <option value="">Selecione o paciente</option>
                                <option value="João">João</option>
                                <option value="Maria">Maria</option>
                                <option value="Carlos">Carlos</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label texto-label">Atividade:</label>
                            <select
                                className="form-select campo-input"
                                value={atividade}
                                onChange={(e) => setAtividade(e.target.value)}
                            >
                                <option value="">Selecione a atividade</option>
                                <option value="Jogo da Memória">Jogo da Memória</option>
                                <option value="Quiz de Palavras">Quiz de Palavras</option>
                                <option value="Kanban Interativo">Kanban Interativo</option>
                            </select>
                        </div>

                        <div className="text-center">
                            <button type="submit" className="botao-cadastrar">
                                Cadastrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </main>
    );
}

export default MainDemanda;