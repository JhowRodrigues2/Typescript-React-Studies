import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { UsuarioLogadoContext } from "../../shared/contexts";

const Dashboard = () => {
  const counterRef = useRef({ counter: 0 });
  const { nomeDoUsuario } = useContext(UsuarioLogadoContext);

  return (
    <div>
      <p>Dashboard</p>
      <p>{nomeDoUsuario}</p>

      <p>Contador:{counterRef.current.counter}</p>
      <Link to={"/login"}>Login</Link>
      <button onClick={() => counterRef.current.counter++}>Somar</button>
    </div>
  );
};

export default Dashboard;
