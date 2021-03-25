import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";
import styled from "styled-components";

const StyledIcon = styled.div`
  }
`;

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <StyledIcon>
      <div style={{fontFamily:'Dinosaur Icons', fontSize:'32', width: '32', height: '32', marginRight: '9'}}>~</div>
    </StyledIcon>
  );
};

export default Icon;
