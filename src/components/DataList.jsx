import React from 'react';
import GridLoader from 'react-spinners/GridLoader';
import styled from 'styled-components';

const Root = styled.div`
  height: 100%;

  .spinner-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const DataList = ({ children, error, loading }) => (
  <Root>
    <div className="spinner-container" style={{display: loading ? 'flex' : 'none'}}>
      <GridLoader
        size={50}
        color={"gray"}
        loading={loading}
      />
    </div>
    {
      error ?
      <div>Data Query Error: {error}</div> :
      children
    }
  </Root>
);

export default DataList;
