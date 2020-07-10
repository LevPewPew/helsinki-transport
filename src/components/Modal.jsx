import React from 'react';
import styled from 'styled-components';
import { COLORS } from 'styles';

const Root = styled.div`
  width: 80vh;
  height: 80vh;
  position: absolute;
  border: 1px solid grey;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.MAIN};
`;

const Modal = ({ children, className, displayed, setDisplayed }) => (
  <Root
    className={className}
    style={{display: displayed ? 'flex' : 'none'}}
  >
    <button type="button" onClick={() => setDisplayed(false)}>X</button>
    {children}
  </Root>
);

export default Modal;
