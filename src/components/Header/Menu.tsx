import React from "react";
import { ReactComponent as MenuIcon } from "../../assets/images/Menu.svg";
import { ReactComponent as HamburgerMenu } from "../../assets/images/HamburgerMenu.svg";

interface MenuProps {
  setGridview: any;
  gridview: boolean;
}

export const Menu: React.FC<MenuProps> = ({ setGridview, gridview }) => {
  console.log("gridview", gridview);
  return (
    <div className="bg-menu">
      {gridview ? (
        <HamburgerMenu onClick={() => setGridview(false)} />
      ) : (
        <MenuIcon onClick={() => setGridview(true)} />
      )}
    </div>
  );
};
