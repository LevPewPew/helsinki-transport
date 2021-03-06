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
    <a href="https://digitransit.fi/en/developers/apis/1-routing-api/1-graphiql/" target="_blank">
      <h1>Helsinki Transport</h1>
    </a>
  </Root>
);

export default Header;
