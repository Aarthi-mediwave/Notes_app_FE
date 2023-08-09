import React from "react";
import "../../styles/components/Card.css";
import { ReactComponent as CardPin } from "../../assets/images/CardPin.svg";
import moment from "moment";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

type CardProps = {
  card: any;
};

export const Card = ({ card }: CardProps) => {
  const navigate = useNavigate();
  return (
    <div
      className={`card-container ${
        card.noteColour ? `${card.noteColour}` : "pale-green"
      }`}
      onClick={() => {
        navigate(`/notes/create/${card.id}`);
      }}
    >
      <div className="float-right">
        <CardPin />
      </div>
      <div className="card-content">
        <h2>{card.content}</h2>
        <div className="card-footer">
          <p>{moment(card.createdOn).format("MMM DD, YYYY")}</p>
        </div>
      </div>
    </div>
  );
};
