import React, { Children, cloneElement, isValidElement, useState } from 'react';
import styled, { css } from 'styled-components';
import { COLORS } from 'styles';
import { useSpring, animated } from 'react-spring';
import IsInView from 'react-visibility-sensor';

const Root = styled(animated.div)`
  width: 100%;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid ${COLORS.SUBTLE_DETAILS};
  position: relative;

  ${(props) => props.expandable && css`
    cursor: pointer;
  `}
`;

const DataListItemCard = ({ animate, children }) => {
  const [ detailsOpen, setDetailsOpen ] = useState(false);
  const [ { backgroundColor }, setSpring ] = useSpring(() => (
    { backgroundColor: COLORS.MAIN }
  ));
  const [ inView, setIsInView ] = useState(false);

  const childrenWithProps = Children.map(children, (child) => (
    isValidElement(child) ?
    cloneElement(child, { detailsOpen }) :
    child
  ));

  return (
    <IsInView
      onChange={(check) => setIsInView(check)}
      partialVisibility
    >
      <Root
        onClick={() => setDetailsOpen(!detailsOpen)}
        onMouseEnter={() => setSpring({ backgroundColor: COLORS.SUBTLE_DETAILS })}
        onMouseLeave={() => setSpring({ backgroundColor: COLORS.MAIN })}
        // only providing animation if item is visible.
        // doing this is essential to not take a HUGE hit in performance
        // when there are a large number of data items
        style={animate && inView ? { backgroundColor } : null}
        expandable={animate}
      >
        {childrenWithProps}
      </Root>
    </IsInView>
  );
};

export default DataListItemCard;
