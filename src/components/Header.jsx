import React from 'react';
import styled from 'styled-components';
import { COLORS } from 'styles';

const Root = styled.header`
  display: flex;
  justify-content: center;
  background-color: transparent;

  a {
    text-decoration: none;
    opacity: 20%;
    
    h1 {
      font-size: 48px;
      color: ${COLORS.TEXT_PRIMARY};
    }

    &:hover {
      color: ${COLORS.TEXT_PRIMARY};
      opacity: 100%;
    }
  }
`;

const Header = ({className}) => (
  <Root
    className={className}
  >
    <a href="https://digitransit.fi/en/developers/">
      <h1>Helsinki Transport</h1>
    </a>
  </Root>
);

export default Header;
