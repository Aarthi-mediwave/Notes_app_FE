import React from "react";
import { ReactComponent as DeleteIcon } from "../../assets/images/Delete.svg";

interface DeleteProps {}

export const Delete: React.FC<DeleteProps> = ({}) => {
  return (
    <div className="bg-delete">
      <DeleteIcon />
    </div>
  );
};
