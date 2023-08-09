import React, { useState } from "react";
import PaletteTick from "../../assets/images/PaletteTick.svg";
import { ReactComponent as Palette } from "../../assets/images/Palette.svg";

type Color = {
  name: string;
  hex: string;
};

type Props = {
  colors: Color[];
};

const PaletteView: React.FC<Props> = ({ colors }) => {
  const [showSecondDiv, setShowSecondDiv] = useState(false);

  const handleFirstDivClick = () => {
    setShowSecondDiv(!showSecondDiv);
  };

  return (
    <>
      <div className="bg-palette">
        <span onClick={handleFirstDivClick}>
          <Palette />
        </span>
      </div>
    </>
  );
};

export default PaletteView;
