import React from "react";
import { TextInput } from "../../components/Forms/TextInput";
import "../../styles/components/Search.css";
import { ReactComponent as Searchtext } from "../../assets/images/Search.svg";

interface SearchProps {}

export const Search: React.FC<SearchProps> = ({}) => {
  return (
    <div className="search-container bg-search">
      <input placeholder="Search..." className="js-search" type="text" />
      <Searchtext />
    </div>
  );
};
