import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";

interface IUsuarioLogadoProps {
  nomeDoUsuario: string;
  logout: () => void;
}

interface IChildrenProps {
  children: ReactNode;
}
export const UsuarioLogadoContext = createContext<IUsuarioLogadoProps>(
  {} as IUsuarioLogadoProps
);
export const UsuarioLogadoProvider = ({ children }: IChildrenProps) => {
  const [nome, setNome] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setNome("Jhow");
    }, 1000);
  });

  const handleLogout = useCallback(() => {
    console.log("deslogado");
  }, []);
  return (
    <UsuarioLogadoContext.Provider
      value={{ nomeDoUsuario: nome, logout: handleLogout }}
    >
      {children}
    </UsuarioLogadoContext.Provider>
  );
};
