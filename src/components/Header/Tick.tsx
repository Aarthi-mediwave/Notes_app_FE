import React from "react";
import { ReactComponent as TickIcon } from "../../assets/images/Tick.svg";

interface TickProps {
  state: any;
  handleSubmit: any;
}

export const Tick: React.FC<TickProps> = ({ state, handleSubmit }) => {
  return (
    <div
      className={`bg-tick ${
        state.title !== "" && state.content !== "" ? "green" : ""
      }`}
      onClick={handleSubmit}
    >
      <TickIcon />
    </div>
  );
};
