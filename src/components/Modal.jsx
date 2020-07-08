import React from 'react';
import styled from 'styled-components';
import { COLORS } from 'styles';

const Modal = (props) => {
  const { children, className, isDisplayed } = props;

  const Root = styled.div`
    width: 80vh;
    height: 80vh;
    position: absolute;
    border: 1px solid grey;
    border-radius: 5px;
    background-color: ${COLORS.MAIN};
  `;

  return (
    <Root className={className} style={{display: isDisplayed ? 'initial' : 'none'}}>
      {children}
    </Root>
  )
};

export default Modal;
