import React, { Children, cloneElement, isValidElement, useState } from 'react';
import styled from 'styled-components';
import { COLORS } from 'styles';

const Root = styled.div`
  width: calc(initial + 3px);
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

function SideBar({children, className, list}) {
  const [ selected, setSelected ] = useState(null);

  const childrenWithProps = Children.map(children, (child) => (
    isValidElement(child) ?
    cloneElement(child, { selected, setSelected }) :
    child
  ));

  return (
    <Root
      className={className}
    >
      {childrenWithProps}
      <div className="list-container">
        {list}
      </div>
    </Root>
  );
};

export default SideBar;
