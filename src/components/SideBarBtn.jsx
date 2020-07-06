import React from 'react';
import styled from 'styled-components';
import { COLORS } from 'styles';

const Root = styled.button`
  padding: 20px;
  border: none;
  display: flex;
  align-items: center;
  background-color: ${COLORS.POP};

  &:focus {
    outline: 0;
  }

  span {
    display: flex;
    align-items: center;
  }

  .icon {
    margin-left: 5px;
  }
`;

const SideBarBtn = ({ handleClick, icon, text }) => (
  <Root
    onClick={handleClick}
  >
    <span>{text}</span><span className="icon">{icon}</span>
  </Root>
);

export default SideBarBtn;
