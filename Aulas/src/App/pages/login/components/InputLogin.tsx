import React, { forwardRef } from "react";

interface InputLoginProps {
  label: string;
  value: string;
  type: string;
  onChange: (newValue: string) => void;
  onPressEnter?: () => void;
}

const InputLogin = forwardRef<HTMLInputElement, InputLoginProps>(
  ({ label, value, onChange, onPressEnter, type }, ref) => {
    return (
      <label>
        {label}
        <input
          type={type}
          ref={ref}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" ? onPressEnter && onPressEnter() : undefined
          }
        />
      </label>
    );
  }
);

export default InputLogin;
