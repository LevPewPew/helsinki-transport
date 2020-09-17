import React from "react";
import GridLoader from "react-spinners/GridLoader";
import styled from "styled-components";
import { COLORS } from "styles";

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

const DataList = ({ children, query, animate }) => {
  const { loading, error, data } = useQuery(query);

  return (
    <Root>
      <div
        className="spinner-container"
        style={{ display: loading ? "flex" : "none" }}
      >
        <GridLoader
          size={50}
          color={COLORS.SELECTED_DETAILS}
          loading={loading}
        />
      </div>
      {error ? (
        <div>Data Query Error: {error}</div>
      ) : (
        <>
          <DataList error={error} loading={loading}>
            {data?.routes.map((item, i) => (
              <DataListItemCard animate={animate}>
                <RouteItem item={item} key={`RouteItem${i}`} />
              </DataListItemCard>
            ))}
          </DataList>
        </>
      )}
    </Root>
  );
};

export default DataList;
