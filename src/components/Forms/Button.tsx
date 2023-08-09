import React from "react";
import "../../styles/components/Button.css";

interface ButtonProps {
  text?: string;
  addClass?: string;
  btntype: "submit" | "button";
  disabled?: boolean;
  onClick?: any;
  show_icon?: boolean;
  id?: string;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  addClass,
  btntype,
  disabled,
  onClick,
  show_icon,
  id,
}) => {
  return (
    <button
      id={id}
      onClick={onClick}
      type={btntype === "button" ? "button" : "submit"}
      className={`btn ${addClass}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
