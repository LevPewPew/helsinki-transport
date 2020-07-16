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
      padding: 0.75rem;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow-y: scroll;

      &::-webkit-scrollbar {
        -webkit-appearance: none;
      }

      &::-webkit-scrollbar:vertical {
        width: 11px;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 8px;
        border: 2px solid ${COLORS.MAIN};
        background-color: rgba(0, 0, 0, .5);
      }
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
