import React, { useState } from "react";
import "../../styles/components/Input.css";

interface TextInputProps {
  label?: string;
  type: string;
  name: string;
  placeholder?: string;
  values?: string | number | Array<string>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  type,
  values,
  name,
  onChange,
  placeholder,
}) => {
  const [value, setValue] = useState("");

  return (
    <div className="group-input">
      <div className="flex">
        <div className="flex-grow">
          <label>{label}</label>
        </div>
      </div>
      <div className="relative">
        <input
          name={name}
          type={type}
          value={values}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default TextInput;
