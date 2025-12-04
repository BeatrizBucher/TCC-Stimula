import Navbar from '../../template/Navbar';
import Footer from '../../template/Footer';
import MainHistoriaRelogio from '../../MainHistoriaRelogio';

function Relogio() {

return(
<>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    
                    <MainHistoriaRelogio />
                    <Footer />

                </div>
            </div>
        </ >
);

}
export default Relogio;
