import React from 'react';
import styled from 'styled-components';
import { COLORS } from 'styles';

const Root = styled.div`
  width: 100%;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid ${COLORS.POP};
`;

const DataListItemCard = ({ children }) => (
  <Root>
    {children}
  </Root>
);

export default DataListItemCard;
