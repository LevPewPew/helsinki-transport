import React, {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useState,
  useRef } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { queries } from 'graphs';
import styled, { css } from 'styled-components';
import { breakpoints, COLORS, respondTo } from 'styles';
import { animated, useSpring } from 'react-spring';

const Root = styled(animated.div)`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.MAIN};
  z-index: 1500;
  height: 100vh;
  position: absolute;
  top: 0px;
  left: ${(props) => props.slideOffset + 'px'};

  .expand-tag {
    // LEFT OFF make the tag actually look good, get a icon...
    width: 50px;
    height: 50px;
    background-color: orange;
    z-index: 1501;
    position: absolute;
    right: 0px;
    top: 30%;
    transform-origin: center right;
    transform: rotateZ(180deg);
  }
  
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
  const selfRef = useRef(null);
  const [ width, setWidth ] = useState(null)
  const [ selected, setSelected ] = useState(null);
  const { data } = useQuery(queries.getModalDisplayed);
  const [ { x }, setSpring ] = useSpring(() => (
    { x: 0 }
  ));

  useEffect(() => {
    setWidth(selfRef.current.offsetWidth);
    window.addEventListener('resize', () => setWidth(selfRef.current.offsetWidth));

    if (!data.modalDisplayed) {
      setSelected(null);
    }
  }, [data, selfRef.current]);

  const childrenWithProps = Children.map(children, (child) => (
    isValidElement(child) ?
    cloneElement(child, { selected, setSelected }) :
    child
  ));

  return (
    <Root
      className={className}
      onMouseEnter={() => setSpring({ x: window.innerWidth <= 768 ? width - 5 : 0 })}
      onMouseLeave={() => setSpring({ x: 0 })}
      ref={selfRef}
      slideOffset={window.innerWidth <= 768 ? -width + 5 : 0}
      style={{ transform: x.interpolate((a) => `translateX(${a}px)`) } }
    >
      <div className="expand-tag">
        <span>X</span>
      </div>
      {childrenWithProps}
      <div className="list-container">
        {list}
      </div>
    </Root>
  );
};

export default SideBar;
