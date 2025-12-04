import './Games.css'
import MainJogoDaMemoriaFacil from '../../MainJogoDaMemoriaFacil';
import Navbar from '../../template/Navbar';
import Footer from '../../template/Footer';
import React from "react";

function JogoDaMemoriaFacil() {

  
    return (
        <>
            <Navbar />

            <div className="container-fluid">
                <div className="row">
                  
                    <MainJogoDaMemoriaFacil />
                    <Footer />


                </div>
            </div>
        </ >
    );
}
export default JogoDaMemoriaFacil;