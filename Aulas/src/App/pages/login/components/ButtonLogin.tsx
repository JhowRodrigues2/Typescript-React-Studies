import React, { ReactNode } from "react";
interface ButtonLoginProps {
  type?: "submit" | "reset" | "button" | undefined;
  onClink: () => void;
  children: ReactNode;
}
const ButtonLogin = ({ type, onClink, children }: ButtonLoginProps) => {
  return (
    <button type={type} onClick={onClink}>
      {children}
    </button>
  );
};

export default ButtonLogin;
