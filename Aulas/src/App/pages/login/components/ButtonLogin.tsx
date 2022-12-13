import React, { ReactNode, useContext } from "react";
import { UsuarioLogadoContext } from "../../../shared/contexts";

interface ButtonLoginProps {
  type?: "submit" | "reset" | "button" | undefined;
  onClink: () => void;
  children: ReactNode;
}
const ButtonLogin = ({ type, onClink, children }: ButtonLoginProps) => {
  const { nomeDoUsuario } = useContext(UsuarioLogadoContext);
  return (
    <button type={type} onClick={onClink}>
      {children}
      {nomeDoUsuario}
    </button>
  );
};

export default ButtonLogin;
