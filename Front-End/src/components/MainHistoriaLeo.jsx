import './paginas/Historia/Historia.css';
import React from "react";
import Leo3 from "../img/leo3.png"
import Leo2 from "../img/leo2.png"
import Leo1 from "../img/leo1.png"


function MainHistoriaLeo() {
    return (
        <main className="col-md-12 ms-sm-auto col-lg-12 px-md-4 container-fluid ">

            <div className="row justify-content-between mt-3 d-flex">

                <div className="row">
                    <div className="col-md-6">
                        <h2 className='titulo'>Léo e a estrela brilhante 🌟</h2>
                        <p>Era uma vez um menino chamado Léo, que adorava observar o céu à noite. Ele tinha um telescópio pequeno, colocado sempre na janela do seu quarto, e todos os dias, antes de dormir, olhava para as estrelas.
                            Uma noite, algo mágico aconteceu: uma estrela começou a piscar de um jeito diferente. Ela piscava devagar… depois rápido… depois devagar de novo. Era como se estivesse chamando Léo.</p>
                        <p>— “Olá, estrelinha! Você está tentando falar comigo?” — perguntou ele, curioso.</p>
                        <p>De repente, uma voz suave respondeu:</p>
                        <p>— “Sim, Léo! Eu sou a Estrela Brilhante, e preciso da sua ajuda. O céu perdeu algumas cores e só você pode me ajudar a recuperá-las!”</p>
                        <p>Léo ficou animado. Ele adorava cores! Vermelho, azul, verde, amarelo… cada uma deixava ele feliz de um jeito especial.
                            A Estrela Brilhante abriu um caminho de luz, como um arco-íris, e Léo, cheio de coragem, entrou nele. Em um piscar de olhos, ele estava em um mundo mágico chamado Vale das Cores Perdidas.
                            As árvores eram cinzas, os rios eram transparentes, e até os passarinhos voavam sem cor. O lugar parecia triste.</p>
                        <p>— “Precisamos trazer as cores de volta!” — disse a estrela.</p>
                        <p>— “Mas como?” — perguntou Léo.</p>
                        <p>A Estrela Brilhante explicou:</p>
                        <p>— “Cada cor está escondida em um desafio. Você precisa encontrá-las uma a uma. Vamos começar?”</p>
                        <p>Léo respirou fundo e respondeu:</p>
                        <p>— “Sim, eu quero ajudar!”</p>

                    </div>
                    <div className="col-md-6 ">
                        <img src={Leo3} className='img-historia' alt="Sample photo" />
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-6 ">
                        <img src={Leo2} className='img-historia' alt="Sample photo" />

                    </div>
                    <div className="col-md-6 mt-3">
                        <p>Léo caminhou até uma caverna guardada por um leão gigante, mas ele não rugia. O leão parecia cansado e sem forças.</p>
                        <p>— “Olá, senhor Leão. Você está bem?” — perguntou Léo.</p>
                        <p>— “Não… perdi minha cor vermelha da coragem. Agora estou com medo até de rugir.”</p>
                        <p>Léo pensou e teve uma ideia: começou a bater palmas e a cantar uma música animada. Aos poucos, o leão sorriu, levantou-se e soltou um rugido poderoso. O vermelho voltou a brilhar em sua juba, iluminando a caverna inteira!</p>
                        <p>Depois, Léo chegou a um lago enorme. A água estava agitada e não parava de fazer ondas. Um peixe azul chorava.</p>
                        <p>— “Eu perdi minha cor azul, e agora não consigo descansar. Tudo parece confuso.”</p>
                        <p>Léo se sentou na beira do lago e começou a respirar fundo: entra o ar… sai o ar… bem devagar. O peixe imitou Léo e, pouco a pouco, a água ficou calma. O azul voltou a brilhar, pintando o lago de tranquilidade.</p>
                        <p>Mais à frente, havia um parque silencioso, com um pássaro amarelo triste em um galho.</p>
                        <p>— “Eu não consigo cantar… perdi minha cor amarela da alegria.”</p>
                        <p>Léo começou a bater palmas de novo, depois pulou de um lado para o outro, rindo. O pássaro achou graça, deu risadinhas e começou a cantar uma linda melodia. O amarelo iluminou o céu, enchendo tudo de brilho.</p>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-6 mt-3">
                        <p>Por fim, Léo encontrou um campo sem flores. Uma tartaruga chorava devagarinho.</p>
                        <p>— “Sem o verde da esperança, nada cresce aqui.”</p>
                        <p>Léo pegou um galhinho seco e o plantou na terra. Depois, regou com um pouco de água do lago.
                            De repente, o verde se espalhou: brotaram árvores, flores e grama macia por todo o campo. A tartaruga sorriu e agradeceu.</p>
                        <p>Quando todas as cores voltaram, o Vale das Cores Perdidas se transformou em um lugar alegre, vivo e cheio de harmonia.</p>
                        <p>A Estrela Brilhante apareceu ao lado de Léo e disse:</p>
                        <p>— “Você conseguiu, Léo! Trouxe de volta a coragem, a calma, a alegria e a esperança. Agora o céu pode brilhar outra vez.”</p>
                        <p>De repente, Léo se viu de volta ao seu quarto, com o telescópio apontado para o céu. A Estrela Brilhante piscava lá no alto, como quem dizia:</p>
                        <p>— “Obrigado, meu amigo!”</p>
                        <p>E Léo sorriu, feliz, porque descobriu que dentro dele sempre existiam todas as cores que poderiam iluminar o mundo.</p>
                    </div>
                    <div className="col-md-6 ">
                        <img src={Leo1} className='img-historia' alt="Sample photo" />
                    </div>
                </div>

            </div>
        </main>
    );
}

export default MainHistoriaLeo;