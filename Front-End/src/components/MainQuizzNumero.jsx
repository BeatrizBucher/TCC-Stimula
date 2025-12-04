import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './paginas/Games/Games.css';

function MainQuizzNumeros() {

  const perguntas = [
    {
      conta: "2 + 3",
      opcoes: ["4", "5", "6", "3"],
      resposta: "5"
    },
    {
      conta: "8 - 2",
      opcoes: ["5", "6", "7", "8"],
      resposta: "6"
    },
    {
      conta: "4 × 2",
      opcoes: ["6", "8", "7", "10"],
      resposta: "8"
    },
    {
      conta: "9 ÷ 3",
      opcoes: ["1", "2", "3", "4"],
      resposta: "3"
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

        <h2 className="titulo-forma mb-3">Quiz de Contas</h2>

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
              <div 
                className="numero-card"
                style={{
                  fontSize: "70px",
                  fontWeight: "bold",
                  background: "#fff176",
                  width: "200px",
                  height: "150px",
                  borderRadius: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "3px solid #f1c40f"
                }}
              >
                {perguntas[atual].conta}
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

export default MainQuizzNumeros;
