import React from "react";
import { ReactComponent as BackIcon } from "../../assets/images/Back.svg";
import { useNavigate } from "react-router-dom";

interface BackProps {}

export const Back: React.FC<BackProps> = ({}) => {
  const navigate = useNavigate();
  return (
    <div className="bg-back">
      <BackIcon
        onClick={() => {
          navigate("/notes");
        }}
      />
    </div>
  );
};
