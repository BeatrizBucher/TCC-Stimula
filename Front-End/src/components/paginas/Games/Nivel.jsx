import './Games.css'
import Nivel from '../../MainNivel';
import Navbar from '../../template/Navbar';
import Footer from '../../template/Footer';
import React from "react";

function NivelPage() {

  
    return (
        <>
            <Navbar />

            <div className="container-fluid">
                <div className="row">
                  
                    <Nivel />
                    <Footer />


                </div>
            </div>
        </ >
    );
}
export default NivelPage;