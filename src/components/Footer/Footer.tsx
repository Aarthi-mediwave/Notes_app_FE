import React from "react";
import "../../styles/components/Footer.css";
import { ReactComponent as Plus } from "../../assets/images/Plus.svg";
import { useNavigate } from "react-router-dom";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  const navigate = useNavigate();
  return (
    <div className="top-footer">
      <div></div>
      <div className="bg-circle">
        <Plus
          onClick={() => {
            navigate("/notes/create");
          }}
        />
      </div>
    </div>
  );
};
