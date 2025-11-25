import './paginas/Demandas/Demandas.css'
import { notificacao, demandaErro, demandaSucesso } from "./Notificacoes";
import { useParams, useState, useEffect } from "react";
import axios from 'axios';

function MainEditarDemanda() {
    const [idpaciente, setIdPaciente] = useState('1');
    const [idatividade, setIdAtividade] = useState('1');
    const [idterapeuta, setIdTerapeuta] = useState('1');
    const [pacientes, setPaciente] = useState([]);
    const [atividades, setAtividade] = useState([]);
    const [terapeutas, setTerapeuta] = useState([]);

    //   const  id  = useParams()


    async function editarDemanda(event) {
        event.preventDefault();
        let demanda = {
            cliente_id: idpaciente,
            terapeuta_id: idterapeuta,
            atividade_id: idatividade
        }
        try {
            let response = await fetch(`http://localhost:3001/editarDemanda/$}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(demanda)
            });
            if (response.ok) {
                demandaSucesso();
                setIdPaciente('');
                setIdAtividade('');
                setIdTerapeuta('');
            }
        } catch (erro) {
            alert('Erro ao editar demanda.');
        }
    }
    
        useEffect(() => {
            async function buscarDados() {
                try {


                    const [pacienteRes, atividadeRes, terapeutaRes] = await Promise.all([
                        axios.get('http://localhost:3001/listarNomeCliente', {
                            // headers: {
                            //     Authorization: `Bearer ${token}`,
                            // },
                        }),

                        axios.get('http://localhost:3001/listarAtividades', {
                            // headers: {
                            //     Authorization: `Bearer ${token}`,
                            // },
                        }),

                        axios.get('http://localhost:3001/listarTerapeutas', {
                            // headers: {
                            //     Authorization: `Bearer ${token}`,
                            // },
                        }),
                    ]);

                    if (pacienteRes.status === 200) {
                        setPaciente(pacienteRes.data);
                    } else {
                        alert('Erro ao carregar produtos.');
                    }

                    if (atividadeRes.status === 200) {
                        setAtividade(atividadeRes.data);
                    } else {
                        alert('Erro ao carregar vendedores.');
                    }

                    if (terapeutaRes.status === 200) {
                        setTerapeuta(terapeutaRes.data);
                    } else {
                        alert('Erro ao carregar vendedores.');
                    }
                } catch (error) {
                    console.error('Erro ao buscar dados:', error);
                };
            }
            buscarDados();
        });
    

        return (
            <>
                <main className="col-md-12 ms-sm-auto col-lg-12 px-md-4 container-fluid d-flex flex-column align-items-center">

                    <div className="container mt-3">
                        <h2 className="titulo-principal">
                            Editar demanda
                        </h2>
                        <div className="caixa-cadastro mx-auto">
                            <form onSubmit={editarDemanda} >

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