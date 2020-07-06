import React from 'react';
import styled from 'styled-components';
import { COLORS } from 'styles';

const Root = styled.div`
  display: flex;
  background-color: ${COLORS.MAIN};
`;

const Footer = ({className}) => (
  <Root className={className}>
    <span>By Lev</span>
    <span> | </span>
    <a href="https://www.linkedin.com/in/levente-toth-42009b187/">
      <span>LinkedIn</span>
    </a>
    <span> | </span>
    <a href="https://github.com/">
      <span>GitHub</span>
    </a>
  </Root>
);

export default Footer;
