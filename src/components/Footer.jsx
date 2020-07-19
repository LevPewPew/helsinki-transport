import React from 'react';
import styled from 'styled-components';
import { COLORS, FONT_SIZES } from 'styles';

const Root = styled.div`
  padding-left: 10px;
  display: flex;
  background-color: transparent;

  a {
    padding: 10px;
    text-decoration: none;
    opacity: 20%;
    
    span {
      font-size: ${FONT_SIZES.XX_LARGE};
      color: ${COLORS.TEXT_PRIMARY};
    }

    &:hover {
      color: ${COLORS.TEXT_PRIMARY};
      opacity: 100%;
    }
  }
`;

const Footer = ({className}) => (
  <Root className={className}>
    <a href="https://twitter.com/LevPewPew" target="_blank">
      <span>By Lev</span>
    </a>
    <a href="https://www.linkedin.com/in/levente-toth-42009b187/" target="_blank">
      <span>LinkedIn</span>
    </a>
    <a href="https://github.com/" target="_blank">
      <span>GitHub</span>
    </a>
  </Root>
);

export default Footer;
