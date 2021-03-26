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
   .logo-text-container {
    display: flex;
    flex-direction: column;
    align-content: flex-end;
   }
  .logo-main-text {
    font-size: 50px;
    margin-left: 12px;
    color: #cdb537;
    top: 12px;
    position: relative;
  }
  .logo-tagline {
    font-family: JurassicPark;
    text-align: center;
    font-size: 28px;
    position: relative;
    top: -5px;
    margin-left: 12px;
    color: #808186;
  }
`;

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <StyledText>
      <Svg viewBox="0 0 36 33" {...props}>
        <image height="33" href={'/images/dino/logo-with-text.png'}/>
      </Svg>
      <div className="logo-text-container">
        <span className="logo-main-text" style={{fontFamily:'JurassicPark'}}>JurassicFarm</span>
        <div className="logo-tagline">The Lost World</div>
      </div>
    </StyledText>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
