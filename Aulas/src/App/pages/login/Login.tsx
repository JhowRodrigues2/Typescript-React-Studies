import React, { useState } from "react";

export default function Login() {
  const handleSubmit = () => {
    console.log(email, password);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form>
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Senha
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleSubmit}>
          Entrar
        </button>
      </form>
    </div>
  );
}
