import { KeyboardEventHandler, useCallback, useState } from "react";

const Dashboard = () => {
  const [lista, setLista] = useState<string[]>(["teste1", "teste2", "teste3"]);

  const handleInputKeyDown: KeyboardEventHandler<HTMLInputElement> =
    useCallback(
      (e) => {
        if (e.key === "Enter") {
          if (e.currentTarget.value.trim().length === 0) return;
          const value = e.currentTarget.value;
          if (lista.includes(value)) return alert("Valor já existente!");
          e.currentTarget.value = "";
          setLista([...lista, value]);
        }
      },
      [lista]
    );

  return (
    <div>
      <p>Lista</p>
      <input onKeyDown={handleInputKeyDown} />
      <ul>
        {lista.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
    </div>
  );
};

export default Dashboard;
