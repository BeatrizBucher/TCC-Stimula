import MainDemandas from '../../MainDemandas';
import Navbar from '../../template/Navbar';
import Footer from '../../template/Footer';
import React from "react";


function Demandas() {
  
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <MainDemandas />
                    <Footer />
                </div>
            </div>
        </ >
    );
}
export default Demandas;