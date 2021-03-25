import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";
import styled from "styled-components";

const StyledIcon = styled.div`
  .farm-nav-icon {
    font-size: 32px;
    margin-right: 9px;
  }
`;

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <StyledIcon>
      <div className="farm-nav-icon" style={{fontFamily:'Dinosaur Icons'}}>L</div>
    </StyledIcon>
  );
};

export default Icon;
