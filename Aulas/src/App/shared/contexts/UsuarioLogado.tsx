import { createContext, ReactNode } from "react";

interface IUsuarioLogadoProps {
  nomeDoUsuario: string;
}

interface IChildrenProps {
  children: ReactNode;
}
export const UsuarioLogadoContext = createContext<IUsuarioLogadoProps>(
  {} as IUsuarioLogadoProps
);
export const UsuarioLogadoProvider = ({ children }: IChildrenProps) => {
  return (
    <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: "Jhow" }}>
      {children}
    </UsuarioLogadoContext.Provider>
  );
};
