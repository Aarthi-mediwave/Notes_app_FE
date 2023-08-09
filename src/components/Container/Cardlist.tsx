import React from "react";
import { Card } from "./Card";
import "../../styles/components/Card.css";

interface CardListProps {
  data: Array<any>;
  gridview: boolean;
}

const CardList = ({ data, gridview }: CardListProps) => {
  return (
    <div
      className={`overall-card-container ${
        gridview ? "grid-cols-1" : "grid-cols-2"
      }`}
    >
      {data.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
};

export default CardList;
