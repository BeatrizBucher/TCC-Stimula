import './Games.css'
import MainJogoDaMemoria from '../../MainJogoDaMemoria';
import Navbar from '../../template/Navbar';
import Footer from '../../template/Footer';
import React from "react";

function JogoDaMemoria() {

  
    return (
        <>
            <Navbar />

            <div className="container-fluid">
                <div className="row">
                  
                    <MainJogoDaMemoria />
                    <Footer />


                </div>
            </div>
        </ >
    );
}
export default JogoDaMemoria;