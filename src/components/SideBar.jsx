import React, {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useState,
  useRef
} from 'react';
import { FiMenu } from 'react-icons/fi';
import { useQuery } from '@apollo/react-hooks';
import { queries } from 'graphs';
import styled from 'styled-components';
import { COLORS, FONT_SIZES } from 'styles';
import { animated, useSpring } from 'react-spring';

const Root = styled(animated.div)`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.MAIN};
  z-index: 1500;
  height: 100vh;
  position: absolute;
  top: 0px;
  left: ${(props) => props.offset + 'px'};

  .expand-tag {
    width: 50px;
    height: 50px;
    background-color: ${COLORS.MAIN};
    font-size: ${FONT_SIZES.XXX_LARGE};
    display: flex;
    justify-content: center;
    align-items: center;
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
        border: 2px solid ${COLORS.SUBTLE_DETAILS};
        background-color: ${COLORS.POP};
      }
    }
  }
`;

function SideBar({children, className, list, returnWidth }) {
  const selfRef = useRef(null);
  const [ width, setWidth ] = useState(null);
  const [ expanded, setExpanded ] = useState(false);
  const [ selected, setSelected ] = useState(null);
  const { data } = useQuery(queries.getModalDisplayed);
  const [ { x }, setSpring ] = useSpring(() => (
    { x: 0 }
  ));

  const handleExpandTagClick = () => {
    if (expanded) {
      setSpring({ x: 0 });
    } else {
      setSpring({ x: width - 1 });
    }
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (!data.modalDisplayed) {
      setSelected(null);
    }
  }, [data]);

  useEffect(() => {
    setWidth(selfRef.current.offsetWidth);
    window.addEventListener('resize', () => setWidth(selfRef.current.offsetWidth));
  }, []);

  useEffect(() => {
    returnWidth(width);
  }, [width]);

  const childrenWithProps = Children.map(children, (child) => (
    isValidElement(child) ?
    cloneElement(child, { selected, setSelected }) :
    child
  ));

  return (
    <Root
      className={className}
      onMouseEnter={() => setSpring({ x: window.innerWidth <= 768 ? width - 1 : 0 })}
      onMouseLeave={() => setSpring({ x: 0 })}
      ref={selfRef}
      offset={window.innerWidth <= 768 ? 1 - width : 0}
      style={{ transform: x.interpolate((a) => `translateX(${a}px)`) } }
    >
      <div
        className="expand-tag"
        onClick={handleExpandTagClick}
        style={{ display: window.innerWidth <= 768 ? 'flex' : 'none' }}
      >
        <FiMenu />
      </div>
      {childrenWithProps}
      <div className="list-container">
        {list}
      </div>
    </Root>
  );
};

export default SideBar;
