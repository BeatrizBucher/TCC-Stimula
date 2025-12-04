import './paginas/Demandas/Demandas.css'
import { useParams, useState, useEffect, useContext } from "react";
import axios from 'axios';
import { AuthContext } from "./Context/AuthContext";

function MainEditarDemanda() {

    const [idpaciente, setIdPaciente] = useState('');
    const [idatividade, setIdAtividade] = useState('');
    const [idterapeuta, setIdTerapeuta] = useState('');
    const [pacientes, setPaciente] = useState([]);
    const [atividades, setAtividade] = useState([]);
    const [terapeutas, setTerapeuta] = useState([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        buscarDados();
    }, []);

    async function buscarDados() {
        try {
            const id = localStorage.getItem('id');

            const demandaRes = await axios.get(`http://localhost:3001/api/demanda/${id}`, {

            });

            const [pacienteRes, atividadeRes, terapeutaRes] = await Promise.all([
                axios.get('http://localhost:3001/listarNomeCliente', {

                }),
                axios.get('http://localhost:3001/listarAtividades', {

                }),
                axios.get('http://localhost:3001/listarTerapeutas', {

                })
            ]);

            if (demandaRes.status === 200) {
                const demanda = demandaRes.data;
                setIdPaciente(demanda.idpaciente || '');
                setIdAtividade(demanda.idatividade || '');
                setIdTerapeuta(demanda.idterapeuta || '');
            }

            if (pacienteRes.status === 200) {
                setPaciente(pacienteRes.data);
            }
            if (atividadeRes.status === 200) {
                setAtividade(atividadeRes.data);
            }
            if (terapeutaRes.status === 200) {
                setTerapeuta(terapeutaRes.data);
            }

            setCarregando(false);
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
            alert('Erro ao carregar dados da demanda');
            setCarregando(false);
        }
    }


    async function editarDemanda(event,id) {
        event.preventDefault();

        const cliente = {
            idpaciente,
            idatividade,
            idterapeuta,
        };

        try {
            const cadastro = await axios.put(`http://localhost:3001/api/atualizarCliente/${id}`, cliente, {
                // headers: {
                //     'Authorization': `Bearer ${token}`
                // },
            });

            if (cadastro.status === 200) {
                alert('Cliente atualizado com sucesso!');
            }
        } catch (erro) {
            alert(`Erro ao atualizar cliente: ${erro.message}`);
        }
    }

    if (carregando) {
        return <div className="text-center mt-5"><p>Carregando dados...</p></div>;
    }

    return (
        <>
            <main className="col-md-12 ms-sm-auto col-lg-12 px-md-4 container-fluid d-flex flex-column align-items-center">
                <div className="container mt-3">
                    <h2 className="titulo-principal">Editar demanda</h2>
                    <div className="caixa-cadastro mx-auto">
                        <form onSubmit={editarDemanda}>
                            <div className="mb-3">
                                <label className="form-label texto-label">Paciente:</label>
                                <select
                                    className="form-select campo-input"
                                    value={idpaciente}
                                    onChange={(e) => setIdPaciente(e.target.value)}
                                >
                                    {pacientes.length === 0 ? (
                                        <option disabled>Sem pacientes</option>
                                    ) : (
                                        pacientes.map((paciente) => (
                                            <option key={paciente.id} value={paciente.id}>
                                                {paciente.nome_completo}
                                            </option>
                                        ))
                                    )}
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label texto-label">Atividade:</label>
                                <select
                                    className="form-select campo-input"
                                    value={idatividade}
                                    onChange={(e) => setIdAtividade(e.target.value)}
                                >
                                    {atividades.length === 0 ? (
                                        <option disabled>Sem atividades</option>
                                    ) : (
                                        atividades.map((atividade) => (
                                            <option key={atividade.id} value={atividade.id}>
                                                {atividade.nome}
                                            </option>
                                        ))
                                    )}
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label texto-label">Terapeuta:</label>
                                <select
                                    className="form-select campo-input"
                                    value={idterapeuta}
                                    onChange={(e) => setIdTerapeuta(e.target.value)}
                                >
                                    {terapeutas.length === 0 ? (
                                        <option disabled>Sem terapeutas</option>
                                    ) : (
                                        terapeutas.map((terapeuta) => (
                                            <option key={terapeuta.id} value={terapeuta.id}>
                                                {terapeuta.nome}
                                            </option>
                                        ))
                                    )}
                                </select>
                            </div>

                            <div className="text-center">
                                <button type="submit" className="botao-cadastrar">
                                    Editar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
}

export default MainEditarDemanda;