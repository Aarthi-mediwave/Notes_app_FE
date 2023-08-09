import React from "react";
import { ReactComponent as MenuPin } from "../../assets/images/MenuPin.svg";

interface PinProps {
  name: string;
  values?: string;
  onClick?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Pin: React.FC<PinProps> = ({ name, values, onClick }) => {
  return (
    <div className={`bg-pin ${values === "true" ? "green" : ""}`}>
      <MenuPin name={name} values={values} onClick={onClick} />
    </div>
  );
};
