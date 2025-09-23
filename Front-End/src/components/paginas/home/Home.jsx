import './Home.css'
import MainHome from '../../MainHome';
import Navbar from '../../template/Navbar';
import React from "react";


function Home() {

  
    return (
        <>
            <Navbar />

            <div className="container-fluid">
                <div className="row">
                  
                    <MainHome />


                </div>
            </div>
        </ >
    );
}
export default Home;