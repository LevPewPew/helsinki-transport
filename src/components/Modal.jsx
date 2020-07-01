import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  border: 1px solid grey;
  border-radius: 5px;
  background-color: whitesmoke;
`;

const Modal = ({ children, isDisplayed }) => (
  <Root style={{display: isDisplayed ? 'initial' : 'none'}}>
    {children}
  </Root>
);

export default Modal;
