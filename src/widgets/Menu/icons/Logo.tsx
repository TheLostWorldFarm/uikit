import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";
import styled from "styled-components";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const StyledText = styled.div`
   width: 230px;
   display: flex;
  .logo-main-text {
    font-size: 50px;
    margin-left: 12px;
    color: #cdb537;
  }
`;

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <StyledText>
      <Svg viewBox="0 0 36 33" {...props}>
        <image height="33" href={'/images/dino/logo-with-text.png'}/>
      </Svg>
      <span className="logo-main-text" style={{fontFamily:'JurassicPark'}}>JurassicFarm</span>
    </StyledText>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
