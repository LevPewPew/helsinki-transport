import React from 'react';
import styled from 'styled-components';
import { COLORS } from 'styles';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.MAIN};

  .list-container {
    flex-grow: 1;
    position: relative;
    overflow-y: hidden;

    ul {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow-y: scroll;
    }
  }
`;

const SideBar = ({children, className, list}) => (
  <Root
    className={className}
  >
    {children}
    <div className="list-container">
      {list}
    </div>
  </Root>
);

export default SideBar;
