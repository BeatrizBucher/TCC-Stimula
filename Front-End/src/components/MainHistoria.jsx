import { Link } from 'react-router-dom';
import './paginas/Historia/Historia.css';
import React from "react";
import Leo from "../img/leoimg.png"
import Luna from "../img/lunaimg.png"
import Matheus from "../img/matheusimg.png"
import Clara from "../img/claraimg.png"

function MainHistoria() {
    return (
        <main className="col-md-12 ms-sm-auto col-lg-12 px-md-4 container-fluid">

            <div className="row justify-content-between mt-3 d-flex">

                <div className="row">
                    <div className="col-md-6 card-1">
                        <h2 className='titulo'>Léo e a estrela brilhante</h2>
                        <p>   Léo sempre gostou de observar as estrelas com seu telescópio, até que uma noite uma estrela diferente começou a piscar no céu e pediu a sua ajuda. Acompanhe Léo em uma viagem mágica até o Vale das Cores Perdidas, um lugar onde tudo ficou cinza e sem vida. Para devolver a beleza ao mundo, ele precisa encontrar e resgatar quatro cores especiais: a coragem, a calma, a alegria e a esperança. Cada cor está escondida em um desafio encantado, cheio de descobertas e aprendizados. Será que Léo conseguirá trazer de volta todas as cores e iluminar o céu novamente?</p>
                        <div>
                        <Link to="/historialeo" type="button" class="btn btn-warning btn-sm text-white ">Ler mais</Link>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex"> 
                        <div className='card-img-historia'>
                        <img  className='img-historia' src={Leo} alt="Sample photo" />
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-6 "></div>
                    <div className="col-md-6 card-2 mt-3">
                        <h2 className='titulo-2'>Luna e o Jardim dos Sons</h2>
                        <p>Luna tinha uma caixinha mágica que guardava os sons mais bonitos que ela conhecia: o riso das pessoas, o barulho da chuva e até as melodias que lembravam momentos felizes. Mas, de repente, todos os sons desapareceram e o mundo ficou em silêncio. É então que aparece um coelho de orelhas enormes para levá-la até o Jardim dos Sons, um lugar encantado que perdeu sua música. Para devolver a vida ao jardim, Luna precisará encontrar novamente o som do riso, o som da chuva e a música da amizade, cada um escondido em um desafio diferente.</p>
                        <button type="button" class="btn btn-success btn-sm text-white">Ler mais</button>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-6 card-3 mt-3">
                        <h2 className='titulo-3'>O Mistério das Chaves Coloridas</h2>
                        <p>Mateus adora colecionar chaves de todas as formas e cores, mas nunca imaginou que elas poderiam levá-lo a uma aventura mágica. Um dia, ele encontra um cofre misterioso com quatro fechaduras especiais e uma coruja falante que o convida a uma missão: descobrir as quatro chaves mágicas que representam coragem, amizade, criatividade e confiança.Para encontrar cada chave, Mateus precisará superar desafios encantados: atravessar uma ponte que assusta, unir animais que brigam, desenhar portas mágicas em muros e acreditar em si mesmo diante de um espelho mágico.</p>
                        <button type="button" class="btn btn-danger btn-sm text-white">Ler mais</button>
                    </div>
                    <div className="col-md-6 "></div>
                </div>

                <div className="row mt-3 mb-5 mt-3">
                    <div className="col-md-6 "></div>
                    <div className="col-md-6 card-4 mt-3">
                        <h2 className='titulo-4'>O Relógio das Emoções</h2>
                        <p>Clara é uma menina curiosa que tem um talento especial: ela consegue sentir as emoções das pessoas apenas observando os ponteiros dos relógios. Um dia, ao explorar o sótão da casa da avó, ela encontra um relógio antigo e mágico que perdeu o equilíbrio das emoções. Ele a transporta para o Mundo do Relógio Mágico, um lugar onde cada hora representa uma emoção diferente, e pede a ajuda de Clara para restaurar a alegria, a calma, a coragem e a amizade. Ao longo de sua aventura, Clara encontra desafios encantados: crianças que não conseguem rir, uma floresta agitada e ansiosa, uma ponte estreita que assusta e pessoas e animais que se sentem sozinhos.</p>
                        <button type="button" class="btn btn-primary btn-sm text-white">Ler mais</button>
                    </div>
                </div>



            </div>
        </main>
    );
}

export default MainHistoria;