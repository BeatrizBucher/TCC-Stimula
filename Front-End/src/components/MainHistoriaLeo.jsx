import './paginas/Historia/Historia.css';
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Leo3 from "../img/leo3.png";
import Leo2 from "../img/leo2.png";
import Leo1 from "../img/leo1.png";

function MainHistoriaLeo() {
    return (
        <main className="col-md-12 ms-sm-auto col-lg-12 px-md-4 container-fluid">

            <div className="mt-3">
                <Link 
                    to="/historia" 
                    className="btn d-flex align-items-center gap-2 botao-leo"
                >
                    <FaArrowLeft size={18} color="#fff" />
                    Voltar
                </Link>
            </div>

            <div className="row justify-content-between mt-4 align-items-center">
                <div className="col-md-6">
                    <h2 className='titulo'>Léo e a estrela brilhante 🌟</h2>

                    <p>Era uma vez um menino chamado Léo, que adorava observar o céu à noite. Ele tinha um telescópio pequeno, colocado sempre na janela do seu quarto, e todos os dias, antes de dormir, olhava para as estrelas. Uma noite, algo mágico aconteceu: uma estrela começou a piscar de um jeito diferente.</p>

                    <p>— “Olá, estrelinha! Você está tentando falar comigo?” — perguntou ele, curioso.</p>

                    <p>De repente, uma voz suave respondeu:</p>

                    <p>— “Sim, Léo! Eu sou a Estrela Brilhante, e preciso da sua ajuda. O céu perdeu algumas cores e só você pode me ajudar a recuperá-las!”</p>

                    <p>Léo ficou animado. Ele adorava cores! Vermelho, azul, verde, amarelo… cada uma deixava ele feliz de um jeito especial.</p>

                    <p>— “Precisamos trazer as cores de volta!” — disse a estrela.</p>

                    <p>— “Mas como?” — perguntou Léo.</p>

                    <p>— “Cada cor está escondida em um desafio. Você precisa encontrá-las uma a uma.”</p>

                    <p>Léo respirou fundo e respondeu:</p>

                    <p>— “Sim, eu quero ajudar!”</p>
                </div>

                <div className="col-md-6">
                    <img 
                        src={Leo3} 
                        className='img-historia mt-4' 
                        alt="Léo observando o céu com um telescópio."
                    />
                </div>
            </div>

            <div className="row mt-5 align-items-center">
                <div className="col-md-6">
                    <img 
                        src={Leo2} 
                        className='img-historia' 
                        alt="Léo conversando com o leão sobre a cor vermelha da coragem."
                    />
                </div>

                <div className="col-md-6 mt-3">
                    <p>Léo caminhou até uma caverna guardada por um leão gigante, mas ele não rugia. O leão parecia cansado e sem forças.</p>

                    <p>— “Não… perdi minha cor vermelha da coragem. Agora estou com medo até de rugir.”</p>

                    <p>Léo então começou a cantar uma música animada. Aos poucos, o leão recuperou sua força e a cor vermelha brilhou em sua juba.</p>

                    <p>Depois, Léo chegou a um lago enorme. A água estava agitada e um peixe azul chorava.</p>

                    <p>— “Eu perdi minha cor azul da calma…”</p>

                    <p>Léo ensinou o peixe a respirar fundo: entra o ar… sai o ar… devagar. A água ficou calma e o azul voltou.</p>

                    <p>Mais à frente, havia um parque silencioso com um pássaro amarelo triste.</p>

                    <p>— “Perdi minha cor da alegria…”</p>

                    <p>Léo começou a brincar, rir e pular. O pássaro sorriu e voltou a cantar, iluminando tudo de amarelo.</p>
                </div>
            </div>

            <div className="row mt-5 align-items-center mb-5">
                <div className="col-md-6 mt-3">
                    <p>Por fim, Léo encontrou um campo sem flores. Uma tartaruga chorava devagarinho.</p>

                    <p>— “Sem o verde da esperança, nada cresce aqui.”</p>

                    <p>Léo plantou um galhinho seco e regou com água. De repente, o verde se espalhou: flores, árvores e grama brotaram por todo o lugar.</p>

                    <p>Com todas as cores de volta, o Vale das Cores Perdidas se transformou em um lugar alegre, vivo e cheio de harmonia.</p>

                    <p>A Estrela Brilhante apareceu ao lado de Léo e disse:</p>

                    <p>— “Você conseguiu! Coragem, calma, alegria e esperança… o céu pode brilhar outra vez.”</p>

                    <p>De repente, Léo estava de volta ao seu quarto, com o telescópio apontado para o céu. A estrela piscou como quem dizia: “Obrigado, meu amigo!”</p>

                    <p>E Léo sorriu, porque descobriu que dentro dele sempre existiam todas as cores que poderiam iluminar o mundo.</p>
                </div>

                <div className="col-md-6 ">
                    <img 
                        src={Leo1} 
                        className='img-historia' 
                        alt="Léo sorrindo após sua aventura mágica." 
                    />
                </div>
            </div>

        </main>
    );
}

export default MainHistoriaLeo;
