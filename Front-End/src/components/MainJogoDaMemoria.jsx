
import './paginas/Games/Games.css';
import React, { useState, useEffect } from "react";


function MainJogoDaMemoria() {
    const animais = ['🦁', '🐯', '🦒', '🦓', '🐘', '🦍', '🦜', '🐊'];

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

    useEffect(() => iniciarJogo(), []);
    return (
        <main className="col-md-9 ms-sm-auto col-lg-12 px-md-4">

            <div className="jogo-memoria">
                <h3>Encontre os Animais</h3>

                {pares.length === cartas.length && cartas.length > 0 && (
                    <div className="mensagem-sucesso">
                        Parabéns! Você encontrou todos!
                        <button onClick={iniciarJogo}>Jogar Novamente</button>
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
        </main>
    );
}

export default MainJogoDaMemoria;