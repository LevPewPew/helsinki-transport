import React from 'react';
import styled from 'styled-components';
import { COLORS } from 'styles';

const SideBarBtn = (props) => {
  const { handleClick, icon, text } = props;
  
  const Root = styled.button`
    padding: 20px;
    border: none;
    display: flex;
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

  return (
    <Root
      onClick={handleClick}
    >
      <span>{text}</span><span className="icon">{icon}</span>
    </Root>
  )
};

export default SideBarBtn;
