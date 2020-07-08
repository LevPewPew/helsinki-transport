import React from 'react';
import styled from 'styled-components';
import { COLORS } from 'styles';

const Root = styled.div`
  width: 80vh;
  height: 80vh;
  position: absolute;
  border: 1px solid grey;
  border-radius: 5px;
  background-color: ${COLORS.MAIN};
`;

const Modal = ({ children, className, isDisplayed }) => (
  <Root className={className} style={{display: isDisplayed ? 'initial' : 'none'}}>
    {children}
  </Root>
);

export default Modal;
