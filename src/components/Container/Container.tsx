import React from "react";
import "../../styles/components/Container.css";

interface ContainerProps {
  children?: any;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="full-white">
      <div className="overall-container">
        <div className="overall-spacing">
          <div className="overall-padding">{children}</div>
        </div>
      </div>
    </div>
  );
};
