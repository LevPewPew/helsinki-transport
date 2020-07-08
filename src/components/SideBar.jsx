import React from 'react';
import styled from 'styled-components';
import { COLORS } from 'styles';

const SideBar = (props) => {
  const {children, className} = props;
  
  const Root = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${COLORS.BUTTON_SECONDARY};
  `;

  return (
    <Root className={className}>
      {children}
    </Root>
  )
};

export default SideBar;
