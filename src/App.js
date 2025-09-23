import Home from "./components/paginas/home/Home";
import Login from "./components/paginas/Login/Login";
import NotFound from "./components/paginas/404/NotFound";
import { Route, Routes } from "react-router-dom";
import Quadro from "./components/paginas/Quadro/Quadro.jsx";
import Historia from "./components/paginas/Historia/Historia.jsx"
import HistoriaLeo from "./components/paginas/Historia/HistoriaLeo.jsx"
import Games from "./components/paginas/Games/Games.jsx";
import JogoDaMemoria from "./components/paginas/Games/JogoDaMemoria.jsx";
import Tarefas from "./components/paginas/Tarefas/Tarefas.jsx"
import Demandas from "./components/paginas/Demandas/Demandas.jsx"
import AlternadorDeTema from "./components/AlternadorDeTema"
import ResetarSenha from './components/paginas/Login/ReseteSenha';



function App() {
  return (
    <>
      <AlternadorDeTema />
      <Routes>


        <Route path="/home" element={<Home />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/quadro" element={<Quadro />} />
        <Route path="/games" element={<Games/>} />
        <Route path="/historialeo" element={<HistoriaLeo />} />
        <Route path="/jogodamemoria" element={<JogoDaMemoria />} />
        <Route path="/resetarsenha" element={<ResetarSenha />} />
        <Route path="/tarefas" element={<Tarefas />} />
        <Route path="/demandas" element={<Demandas />} />
        <Route path="/" element={<Login />} />
        {/*Rota para página 404*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

