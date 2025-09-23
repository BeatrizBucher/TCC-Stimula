import './Games.css'
import MainGames from '../../MainGames';
import Navbar from '../../template/Navbar';
import React from "react";

function Games() {

  
    return (
        <>
            <Navbar />

            <div className="container-fluid">
                <div className="row">
                  
                    <MainGames />


                </div>
            </div>
        </ >
    );
}
export default Games;