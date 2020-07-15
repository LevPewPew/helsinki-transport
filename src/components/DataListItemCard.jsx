import React from 'react';
import styled from 'styled-components';
import { COLORS } from 'styles';
import { useSpring, animated } from "react-spring";

const Root = styled(animated.div)`
  width: 100%;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid ${COLORS.POP};
  position: relative;
`;

const DataListItemCard = ({ animate, children, index }) => {
  const [ { backgroundColor }, setSpring ] = useSpring(() => (
    { backgroundColor: COLORS.MAIN }
  ));

  return (
    <Root
      onMouseEnter={() => setSpring({ backgroundColor: COLORS.POP })}
      onMouseLeave={() => setSpring({ backgroundColor: COLORS.MAIN })}
      // only providing animation if item is visible.
      // doing this is essential to not take a HUGE hit in performance
      // when there are a large number of data items
      style={index < 10 ? { backgroundColor } : null}
    >
      {children}
    </Root>
  );
};

export default DataListItemCard;
