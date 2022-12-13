import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { useUsuarioLogado } from "../../shared/hooks";

const Dashboard = () => {
  const counterRef = useRef({ counter: 0 });
  const { nomeDoUsuario } = useUsuarioLogado();

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
