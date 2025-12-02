import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [nome, setNome] = useState(null);
  const [regra, setRegra] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedNome = localStorage.getItem("nome");
    const storedRegra = localStorage.getItem("regra");

    if (storedToken) setToken(storedToken);
    if (storedNome) setNome(storedNome);
    if (storedRegra) setRegra(storedRegra);
  }, []);

  function login(token, nome, regra) {
    setToken(token);
    setNome(nome);
    setRegra(regra);

    localStorage.setItem("token", token);
    localStorage.setItem("nome", nome);
    localStorage.setItem("regra", regra);
  }

  function logout() {
    setToken(null);
    setNome(null);
    setRegra(null);

    localStorage.removeItem("token");
    localStorage.removeItem("nome");
    localStorage.removeItem("regra");
  }

  return (
    <AuthContext.Provider value={{ token, nome, regra, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
