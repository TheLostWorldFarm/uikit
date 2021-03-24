import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <text>
      <div style={{fontFamily:'Dinosaur Icons', fontSize:'36px;', width: '32px', height: '32px'}}>P</div>
    </text>
  );
};

export default Icon;
