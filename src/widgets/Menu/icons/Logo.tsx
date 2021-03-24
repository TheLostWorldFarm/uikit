import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 36 33" {...props}>
      <image height="33" href={'/images/dino/logo-with-text.png'}/>
    </Svg>

  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
