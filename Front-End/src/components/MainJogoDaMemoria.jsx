
import './paginas/Games/Games.css';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

function MainJogoDaMemoria() {
    const animais = ['🦁', '🐯', '🦒', '🦓', '🐘', '🦍', '🦜', '🐊', '🐷', '🐮', '🐰', '🐼'];

    const [cartas, setCartas] = useState([]);
    const [viradas, setViradas] = useState([]);
    const [pares, setPares] = useState([]);
    const [bloqueado, setBloqueado] = useState(false);

    const iniciarJogo = () => {
        const paresAnimais = [...animais, ...animais];
        const cartasEmbaralhadas = paresAnimais
            .map((animal, i) => ({ id: i, animal }))
            .sort(() => Math.random() - 0.5);

        setCartas(cartasEmbaralhadas);
        setViradas([]);
        setPares([]);
        setBloqueado(false);
    };

    const virarCarta = (id) => {
        if (bloqueado || viradas.includes(id) || pares.includes(id)) return;

        const novasViradas = [...viradas, id];
        setViradas(novasViradas);

        if (novasViradas.length === 2) {
            setBloqueado(true);
            const [id1, id2] = novasViradas;

            if (cartas[id1].animal === cartas[id2].animal) {
                setPares([...pares, id1, id2]);
            }

            setTimeout(() => {
                setViradas([]);
                setBloqueado(false);
            }, 1000);
        }
    };

    useEffect(() =>
        iniciarJogo(),
        []);

    return (
        <main className="col-md-9 ms-sm-auto col-lg-12 px-md-4 d-flex">
            <Link
                to="/nivel"
                className="btn botao-voltar"
            >
                <FaArrowLeft size={16} color="#fff" />
                Voltar
            </Link>

            <div className='col-8 justify-content-center align-items-center align-self-center mx-auto mt-3'>
                <div className="jogo-memoria mb-5 shadow p-4 rounded">
                    <h3 className='titulo-jogo'>Encontre os Animais</h3>

                    {pares.length === cartas.length && cartas.length > 0 && (
                        <div className="mensagem-sucesso">
                            Parabéns! Você encontrou todos!
                            <button className='botao-reiniciar' onClick={iniciarJogo}>Jogar Novamente</button>
                        </div>
                    )}

                    <div className="tabuleiro">
                        {cartas.map((carta, index) => (
                            <div
                                key={carta.id}
                                className={`carta 
                ${viradas.includes(index) ? 'virada' : ''}
                ${pares.includes(index) ? 'encontrada' : ''}`}
                                onClick={() => virarCarta(index)}
                            >
                                <div className="frente">🌿</div>
                                <div className="verso">{carta.animal}</div>
                            </div>
                        ))}
                    </div>

                    <button className="botao-reiniciar" onClick={iniciarJogo}>
                        Reiniciar
                    </button>
                </div>
            </div>

        </main>
    );
}

export default MainJogoDaMemoria;