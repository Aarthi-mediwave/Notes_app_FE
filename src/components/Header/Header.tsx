import React from "react";
import "../../styles/components/Header.css";
import { Search } from "../Header/Search";
import { Menu } from "../Header/Menu";
import { Pin } from "../Header/Pin";
import { Back } from "../Header/Back";
import PaletteView from "../Header/PaletteView";

interface HeaderProps {
  setGridview: any;
  gridview: boolean;
}

export const Header: React.FC<HeaderProps> = ({ setGridview, gridview }) => {
  return (
    <div className="top-header grid gap-5 grid-cols-2 justify-center">
      <div>
        <h1>Notes</h1>
      </div>

      <div className="flex justify-end">
        <div className="menu-overall">
          <Menu setGridview={setGridview} gridview={gridview} />
        </div>
        <div className="menu-overall">
          <Search />
        </div>
      </div>
    </div>
  );
};
