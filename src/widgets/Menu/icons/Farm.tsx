import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <text>
      <div style={{fontFamily:'Dinosaur Icons', fontSize:'1.5rem;', width: '24px', height: '24px'}}>L</div>
    </text>
  );
};

export default Icon;
