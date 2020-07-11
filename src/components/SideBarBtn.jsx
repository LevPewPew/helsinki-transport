import React from 'react';
import styled from 'styled-components';
import { COLORS } from 'styles';
  
const Root = styled.button`
  padding: 20px;
  border: none;
  display: flex;
  position: relative;
  align-items: center;
  background-color: ${COLORS.BUTTON_SECONDARY};
  cursor: pointer;

  &:focus {
    outline: 0;
  }

  span {
    display: flex;
    align-items: center;
    font-size: 24px;
  }

  .icon {
    margin-left: 20px;
    font-size: 24px;
  }
`;

const SideBarBtn = ({ handleClick, icon, text } ) => (
  <Root
    onClick={handleClick}
  >
    <span>{text}</span><span className="icon">{icon}</span>
  </Root>
);

export default SideBarBtn;
