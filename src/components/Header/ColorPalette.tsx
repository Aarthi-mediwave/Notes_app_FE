import React from "react";
import { ReactComponent as Palette } from "../../assets/images/Palette.svg";
import PaletteView from "./PaletteView";

interface ColorPaletteProps {}

export const ColorPalette: React.FC<ColorPaletteProps> = ({}) => {
  const colors = [
    { name: "red", hex: "#FF0000" },
    { name: "blue", hex: "#0000FF" },
    { name: "green", hex: "#00FF00" },
  ];

  return (
    <div className="bg-palette">
      <PaletteView colors={colors} />
    </div>
  );
};
