import React from 'react';
import styled from 'styled-components';

const DataList = styled.ul`
  padding-inline-start: 0px;
  list-style-type: none;
`;

const Root = () => (
  <DataList>
    {children}
  </DataList>
);

export default Root;
