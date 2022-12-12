import { useState } from "react";
import { Routes } from "./routes";
import { UsuarioLogadoProvider } from "./shared/contexts/UsuarioLogado";
function App() {
  return (
    <UsuarioLogadoProvider>
      <Routes />
    </UsuarioLogadoProvider>
  );
}

export default App;
