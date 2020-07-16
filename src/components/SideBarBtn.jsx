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

  // TODO LEFTOFF go to sidebar preferably, but App if i have to, to manage who is selected
  ${(props) => props.selected && css`
    border-right: 3px solid red;
  `}

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

const SideBarBtn = ({ selected, children, handleClick, icon }) => (
  <Root
    selected={selected}
    onClick={handleClick}
  >
    <span>{children}</span><span className="icon">{icon}</span>
  </Root>
);

export default SideBarBtn;
