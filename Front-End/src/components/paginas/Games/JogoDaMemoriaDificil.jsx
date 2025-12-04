import './Games.css'
import MainJogoDaMemoriaDificil from '../../MainJogoDaMemoriaDificil';
import Navbar from '../../template/Navbar';
import Footer from '../../template/Footer';
import React from "react";

function JogoDaMemoriaDificil() {

  
    return (
        <>
            <Navbar />

            <div className="container-fluid">
                <div className="row">
                  
                    <MainJogoDaMemoriaDificil />
                    <Footer />


                </div>
            </div>
        </ >
    );
}
export default JogoDaMemoriaDificil;