import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 50 60" {...props}>
      <image height="60" href={'/images/dino/logo.png'}/>
    </Svg>
  );
};

export default Icon;
