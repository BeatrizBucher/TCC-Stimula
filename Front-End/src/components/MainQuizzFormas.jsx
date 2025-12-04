import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './paginas/Games/Games.css';

function MainQuizzFormas() {

    const perguntas = [
        {
            forma: { nome: "Círculo", estilo: { width: 120, height: 120, borderRadius: "50%", background: "#4da6ff" } },
            opcoes: ["Círculo", "Quadrado", "Triângulo", "Retângulo"],
            resposta: "Círculo"
        },
        {
            forma: { nome: "Quadrado", estilo: { width: 120, height: 120, background: "#ff6666" } },
            opcoes: ["Retângulo", "Quadrado", "Círculo", "Triângulo"],
            resposta: "Quadrado"
        },
        {
            forma: { nome: "Retângulo", estilo: { width: 160, height: 90, background: "#66cc66" } },
            opcoes: ["Quadrado", "Triângulo", "Retângulo", "Círculo"],
            resposta: "Retângulo"
        },
        {
            forma: {
                nome: "Triângulo",
                estilo: {
                    width: 0,
                    height: 0,
                    borderLeft: "60px solid transparent",
                    borderRight: "60px solid transparent",
                    borderBottom: "100px solid #ffcc00"
                }
            },
            opcoes: ["Retângulo", "Triângulo", "Círculo", "Quadrado"],
            resposta: "Triângulo"
        }
    ];

    const [atual, setAtual] = useState(0);
    const [pontuacao, setPontuacao] = useState(0);
    const [finalizado, setFinalizado] = useState(false);

    function responder(opcao) {
        if (opcao === perguntas[atual].resposta) {
            setPontuacao(prev => prev + 1);
        }

        if (atual + 1 < perguntas.length) {
            setAtual(prev => prev + 1);
        } else {
            setFinalizado(true);
        }
    }

    function reiniciar() {
        setAtual(0);
        setPontuacao(0);
        setFinalizado(false);
    }

    return (
        <main className="container-fluid d-flex justify-content-center align-items-start mt-5">

            <Link
                to="/games"
                className="btn botao-voltar"
            >
                <FaArrowLeft size={16} color="#fff" />
                Voltar
            </Link>

            <div className="quiz-card d-flex flex-column text-center ">


                <h2 className="titulo-forma mb-3">Quiz das Formas</h2>

                {finalizado ? (
                    <div className="centro">
                        <h3>Você acertou {pontuacao} de {perguntas.length}!</h3>
                        <button className="botao mt-3" onClick={reiniciar}>
                            Jogar novamente!
                        </button>
                    </div>
                ) : (
                    <>
                        <h4 className="subtitulo">Pergunta {atual + 1} de {perguntas.length}</h4>

                        <div className="forma-centro mt-3 mb-4 d-flex justify-content-center">
                            <div style={perguntas[atual].forma.estilo}></div>
                        </div>

                        <div className="opcoes-container">
                            {perguntas[atual].opcoes.map((escolha, index) => (
                                <button
                                    key={index}
                                    className="opcao-btn"
                                    onClick={() => responder(escolha)}
                                >
                                    {escolha}
                                </button>
                            ))}
                        </div>
                    </>
                )}

            </div>

        </main>
    );
}

export default MainQuizzFormas;
