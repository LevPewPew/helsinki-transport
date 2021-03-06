import React from 'react';
import styled, { css } from 'styled-components';
import { COLORS, FONT_SIZES } from 'styles';

const Root = styled.button`
  padding: 1.25rem;
  border: none;
  display: flex;
  position: relative;
  align-items: center;
  background-color: ${COLORS.MAIN};
  cursor: pointer;

  ${(props) => props.selected && css`
    border-right: 5px solid ${COLORS.SELECTED_DETAILS};
  `}

  /* can't figure out a way to make a border existing not extend the width of the
  btn (i thought this is what box-sizing: border-box was for?) so using this
  pattern instead. */
  ${(props) => !props.selected && css`
    border-right: 5px solid ${COLORS.MAIN};
  `}

  &:focus {
    outline: 0;
  }

  span {
    display: flex;
    align-items: center;
    font-size: ${FONT_SIZES.X_LARGE};
    color: ${COLORS.TEXT_SECONDARY}
  }

  .icon {
    margin-right: 1.0rem;
    font-size: ${FONT_SIZES.X_LARGE};
  }
`;

function SideBarBtn ({ selected, children, handleClick, icon, nth, setSelected }) {
  const handleClickAndSelection = () => {
    setSelected(nth);
    handleClick();
  };

  return (
    <Root
      selected={selected === nth}
      noneSelected={selected}
      onClick={handleClickAndSelection}
    >
      <span className="icon">{icon}</span><span>{children}</span>
    </Root>
  );
}

export default SideBarBtn;
