import Home from "./components/paginas/Home/Home.jsx";
import Login from "./components/paginas/Login/Login";
import NotFound from "./components/paginas/404/NotFound";
import { Route, Routes } from "react-router-dom";
import Historia from "./components/paginas/Historia/Historia.jsx";
import HistoriaLeo from "./components/paginas/Historia/HistoriaLeo.jsx";
import HistoriaLuna from "./components/paginas/Historia/HistoriaLuna.jsx";
import HistoriaMateus from "./components/paginas/Historia/HistoriaMateus.jsx";
import HistoriaRelogio from "./components/paginas/Historia/HistoriaRelogio.jsx";
import Games from "./components/paginas/Games/Games.jsx";
import Nivel from "./components/paginas/Games/Nivel.jsx";
import JogoDaMemoria from "./components/paginas/Games/JogoDaMemoria.jsx";
import JogoDaMemoriaFacil from "./components/paginas/Games/JogoDaMemoriaFacil.jsx";
import JogoDaMemoriaDificil from "./components/paginas/Games/JogoDaMemoriaDificil.jsx";
import Tarefas from "./components/paginas/Tarefas/Tarefas.jsx";
import Demandas from "./components/paginas/Demandas/Demandas.jsx";
import ResetarSenha from './components/paginas/Login/ReseteSenha';
import EditarDemanda from "./components/paginas/Demandas/EditarDemanda.jsx";
import GamesQuizFormas from "./components/paginas/Games/QuizFormas.jsx";
import GamesQuizNumero from "./components/paginas/Games/QuizNumero.jsx";
import GamesQuizPortugues from "./components/paginas/Games/QuizPortugues.jsx";

import { AuthProvider } from "./components/Context/AuthContext.jsx";
import ProtectedRoute from "./components/Protegidas/rotasProtegidas.jsx";
import AcessoNegado from "./components/paginas/AcessoNegado/AcessoNegado.jsx";

function App() {
  return (
    <>

      <AuthProvider>

        <Routes>
          <Route path="/nivel" element={<Nivel />} />
          <Route path="/quizPortugues" element={<GamesQuizPortugues />} />
          <Route path="/quizNumeros" element={<GamesQuizNumero />} />
          <Route path="/quizFormas" element={<GamesQuizFormas />} />
          <Route path="/home" element={<Home />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/games" element={<Games />} />
          <Route path="/historialeo" element={<HistoriaLeo />} />
          <Route path="/historialuna" element={<HistoriaLuna />} />
          <Route path="/historiamateus" element={<HistoriaMateus />} />
          <Route path="/historiarelogio" element={<HistoriaRelogio />} />
          <Route path="/jogodamemoria" element={<JogoDaMemoria />} />
          <Route path="/jogodamemoriafacil" element={<JogoDaMemoriaFacil />} />
          <Route path="/jogodamemoriadificil" element={<JogoDaMemoriaDificil />} />
          <Route path="/editar-demanda/:id" element={<EditarDemanda />} />
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

    </>
  );
}

export default App;

