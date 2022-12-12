import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useContext,
} from "react";
import ButtonLogin from "./components/ButtonLogin";
import InputLogin from "./components/InputLogin";
import { UsuarioLogadoContext } from "../../shared/contexts";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const inputPassRef = useRef<HTMLInputElement>(null); // explicitando que o use ref vai armazenar a referencia de um elemento html
  const userContext = useContext(UsuarioLogadoContext);

  const emailLength = useMemo(() => {
    return email.length * 100;
  }, [email.length]);

  useEffect(() => {
    if (window.confirm("Você é homem?")) {
      console.log("Homem");
    } else {
      console.log("Mulher");
    }
  }, []);

  const handleSubmit = useCallback(() => {
    console.log(email);
    console.log(password);
  }, [email, password]);

  useEffect(() => {
    console.log(email, password);
  }, [email, password]);

  return (
    <div>
      <form>
        {userContext.nomeDoUsuario}
        <p>Quantidade de caracteres no email:{emailLength}</p>
        <InputLogin
          type="email"
          label={"Email"}
          value={email}
          onChange={(newValue) => setEmail(newValue)}
          onPressEnter={() => inputPassRef.current?.focus()}
        />
        <InputLogin
          type="password"
          label={"Senha"}
          value={password}
          onChange={(newValue) => setPassword(newValue)}
          ref={inputPassRef}
        />
        <ButtonLogin type="button" onClink={handleSubmit}>
          Entrar
        </ButtonLogin>
        <ButtonLogin type="button" onClink={handleSubmit}>
          Cadastrar
        </ButtonLogin>
      </form>
    </div>
  );
}
