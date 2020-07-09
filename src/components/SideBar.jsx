import React from 'react';
import styled from 'styled-components';
import { COLORS } from 'styles';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.BUTTON_SECONDARY};
`;

const SideBar = ({children, className}) => (
  <Root
    className={className}
  >
    {children}
  </Root>
);

export default SideBar;
