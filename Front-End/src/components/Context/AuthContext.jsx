import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [nome, setNome] = useState(null);
  const [regra, setRegra] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedNome = localStorage.getItem("nome");
    const storedRegra = localStorage.getItem("regra");
    const storedId = localStorage.getItem("id");

    if (storedToken) setToken(storedToken);
    if (storedNome) setNome(storedNome);
    if (storedRegra) setRegra(storedRegra);
    if (storedId) setId(storedId);
  }, []);

  function login(token, nome, regra, id) {
    setToken(token);
    setNome(nome);
    setRegra(regra);
    setId(id);

    localStorage.setItem("token", token);
    localStorage.setItem("nome", nome);
    localStorage.setItem("regra", regra);
    localStorage.setItem("id", id);
  }

  function logout() {
    setToken(null);
    setNome(null);
    setRegra(null);
    setId(null);
    
    localStorage.removeItem("token");
    localStorage.removeItem("nome");
    localStorage.removeItem("regra");
    localStorage.removeItem("regra");
    localStorage.removeItem("id");
  }

  return (
    <AuthContext.Provider value={{ token, nome, regra, id, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}