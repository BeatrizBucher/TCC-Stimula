import Home from "./components/paginas/home/Home";
import Login from "./components/paginas/Login/Login";
import NotFound from "./components/paginas/404/NotFound";
import { Route, Routes } from "react-router-dom";
import Historia from "./components/paginas/Historia/Historia.jsx"
import HistoriaLeo from "./components/paginas/Historia/HistoriaLeo.jsx"
import Games from "./components/paginas/Games/Games.jsx";
import JogoDaMemoria from "./components/paginas/Games/JogoDaMemoria.jsx";
import Tarefas from "./components/paginas/Tarefas/Tarefas.jsx"
import Demandas from "./components/paginas/Demandas/Demandas.jsx"
import AlternadorDeTema from "./components/AlternadorDeTema"
import ResetarSenha from './components/paginas/Login/ReseteSenha';

import { AuthProvider } from "./components/Context/AuthContext.jsx";
import ProtectedRoute from "./components/Protegidas/rotasProtegidas.jsx";
import AcessoNegado from "./components/paginas/AcessoNegado/AcessoNegado.jsx"; 

function App() {
  return (
    <>

     <AuthProvider>
      <AlternadorDeTema />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/games" element={<Games/>} />
        <Route path="/historialeo" element={<HistoriaLeo />} />
        <Route path="/jogodamemoria" element={<JogoDaMemoria />} />
        <Route path="/resetarsenha" element={<ResetarSenha />} />
        <Route path="/tarefas" element={<Tarefas />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />

        <Route
          path="/demandas"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <Demandas />
            </ProtectedRoute>
          }
        />

        <Route path="/acesso-negado" element={<AcessoNegado />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </AuthProvider>
    
      {/* <AlternadorDeTema />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/games" element={<Games/>} />
        <Route path="/historialeo" element={<HistoriaLeo />} />
        <Route path="/jogodamemoria" element={<JogoDaMemoria />} />
        <Route path="/resetarsenha" element={<ResetarSenha />} />
        <Route path="/tarefas" element={<Tarefas />} />
        <Route path="/demandas" element={<Demandas />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
    </>
  );
}

export default App;

