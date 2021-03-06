import React from 'react';
import { StopItem } from 'components';
import { FONT_SIZES } from 'styles';
import styled from 'styled-components';

const Root = styled.ul`
  height: 100%;
  padding-inline-start: 0px;
  list-style-type: none;
  font-size: ${FONT_SIZES.LARGE};
`;

const StopsList = ({ stops }) => (
  <Root>
    {stops?.map((item, i) => (
      <StopItem
        item={item}
        key={`StopItem${i}`}
      />
    ))}
  </Root>
);

export default StopsList;
