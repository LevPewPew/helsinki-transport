import React from 'react';
import styled, { css } from 'styled-components';
import { COLORS, FONT_SIZES } from 'styles';
  
const Root = styled.button`
  padding: 0.5rem;
  border: ${COLORS.TEXT_SECONDARY};
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.BUTTON_SECONDARY};
  cursor: pointer;

  ${(props) => props.primary && css`
    border: none;
    background-color: ${COLORS.BUTTON_PRIMARY};
  `}

  &:focus {
    outline: 0;
  }

  span {
    display: flex;
    align-items: center;
    font-size: ${FONT_SIZES.MEDIUM};
    color: ${COLORS.TEXT_SECONDARY};

    ${(props) => props.primary && css`
      color: ${COLORS.TEXT_PRIMARY};
    `}
  }
`;

const GeneralBtn = ({ children, handleClick, primary } ) => (
  <Root
    onClick={handleClick}
    primary={primary}
    type="button"
  >
    <span>{children}</span>
  </Root>
);

export default GeneralBtn;
