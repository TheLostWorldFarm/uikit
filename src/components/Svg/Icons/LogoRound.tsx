import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 26 26" {...props}>
      <image height="26" href={'/images/dino/transparent-logo.png'}/>
    </Svg>
  );
};

export default Icon;
