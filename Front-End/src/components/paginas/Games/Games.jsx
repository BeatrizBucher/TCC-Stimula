import './Games.css'
import MainGames from '../../MainGames';
import Navbar from '../../template/Navbar';
import Footer from '../../template/Footer';
import React from "react";

function Games() {

  
    return (
        <>
            <Navbar />

            <div className="container-fluid">
                <div className="row">
                  
                    <MainGames />
                    <Footer />


                </div>
            </div>
        </ >
    );
}
export default Games;