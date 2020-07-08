import React from 'react';
import styled from 'styled-components';
import { COLORS } from 'styles';

const Footer = (props) => {
  const {className} = props;

  const Root = styled.div`
    display: flex;
    justify-content: center;
    background-color: transparent;

    a {
      margin: 10px;
      text-decoration: none;
      opacity: 20%;
      
      span {
        font-size: 24px;
        color: ${COLORS.TEXT_PRIMARY};
      }

      &:hover {
        color: ${COLORS.TEXT_PRIMARY};
        opacity: 100%;
      }
    }
  `;

  return (
    <Root className={className}>
      <a href="https://twitter.com/LevPewPew">
        <span>By Lev</span>
      </a>
      <a href="https://www.linkedin.com/in/levente-toth-42009b187/">
        <span>LinkedIn</span>
      </a>
      <a href="https://github.com/">
        <span>GitHub</span>
      </a>
    </Root>
  )
};

export default Footer;
