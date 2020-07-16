import React from 'react';
import styled from 'styled-components';
import { COLORS, FONT_SIZES } from 'styles';
  
const Root = styled.button`
  padding: 1.25rem;
  border: none;
  display: flex;
  position: relative;
  align-items: center;
  background-color: ${COLORS.MAIN};
  cursor: pointer;

  &:focus {
    outline: 0;
  }

  span {
    display: flex;
    align-items: center;
    font-size: ${FONT_SIZES.X_LARGE};
  }

  .icon {
    margin-left: 1.0rem;
    font-size: ${FONT_SIZES.X_LARGE};
  }
`;

const SideBarBtn = ({ children, handleClick, icon } ) => (
  <Root
    onClick={handleClick}
  >
    <span>{children}</span><span className="icon">{icon}</span>
  </Root>
);

export default SideBarBtn;
