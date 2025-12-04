import Navbar from '../../template/Navbar';
import MainHistoriaLuna from '../../MainHistoriaLuna'
import Footer from '../../template/Footer';

function Luna() {

return(
<>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    
                    <MainHistoriaLuna />
                    <Footer />

                </div>
            </div>
        </ >
);

}
export default Luna;
