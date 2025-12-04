import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './paginas/Games/Games.css';

function MainQuizzPortugues() {

    const perguntas = [
        {
            pergunta: "Qual palavra está escrita corretamente?",
            opcoes: ["Caza", "Casa", "Cassa", "Cása"],
            resposta: "Casa"
        },
        {
            pergunta: "Qual destas é uma vogal?",
            opcoes: ["B", "E", "T", "G"],
            resposta: "E"
        },
        {
            pergunta: "Qual palavra é um animal?",
            opcoes: ["Mesa", "Cachorro", "Copo", "Janela"],
            resposta: "Cachorro"
        },
        {
            pergunta: "Complete: O sol é ______.",
            opcoes: ["quente", "frio", "azedo", "duro"],
            resposta: "quente"
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

            <div className="quiz-card d-flex flex-column text-center">

                <h2 className="titulo-forma mb-3">Quiz de Português</h2>

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
                        <div className="d-flex justify-content-center align itens-center">
                            <div
                                className="mt-3 mb-4 d-flex justify-content-center align-items-center "
                                style={{
                                    background: "#fff176",
                                    padding: "20px",
                                    borderRadius: "15px",
                                    width: "80%",
                                    fontSize: "20px",
                                    fontWeight: "bold",
                                    border: "2px solid #f1c40f"
                                }}
                            >
                                {perguntas[atual].pergunta}
                            </div>
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

export default MainQuizzPortugues;
