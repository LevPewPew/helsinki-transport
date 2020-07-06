import React from 'react';
import styled from 'styled-components';
import { COLORS } from 'styles';

const Root = styled.header`
  display: flex;
  justify-content: center;
  background-color: transparent;

  a {
    text-decoration: none;
    color: ${COLORS.TEXT_HOVER};
    opacity: 50%;

    h1 {
      font-size: 48px;
    }

    &:hover {
      color: ${COLORS.TEXT_HOVER};
      opacity: 100%;
    }
  }
`;

const Header = () => (
  <Root>
    <a href="https://digitransit.fi/en/developers/">
      <h1>Helsinki Transport</h1>
    </a>
  </Root>
);

export default Header;
