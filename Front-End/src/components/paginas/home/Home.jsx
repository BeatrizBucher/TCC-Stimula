import './Home.css'
import MainHome from '../../MainHome';
import Navbar from '../../template/Navbar';
import Footer from '../../template/Footer';
import React from "react";


function Home() {

  
    return (
        <>
            <Navbar />

            <div className="container-fluid">
                <div className="row">
                  
                    <MainHome />
                    <Footer />


                </div>
            </div>
        </ >
    );
}
export default Home;