import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const SideBar = ({children}) => (
  <Root>
    {children}
  </Root>
);

export default SideBar;
