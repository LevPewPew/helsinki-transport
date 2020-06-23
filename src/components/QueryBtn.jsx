import React from 'react';
import { gql } from 'apollo-boost';

function QueryBtn({ dataShape, gqlRequest, setDataItemHtml, setGqlRequest, text }) {
  return (
    <button onClick={() => {
      setDataItemHtml(dataShape);
      setGqlRequest(gqlRequest);
    }}>
      {text}
    </button>
  )
};

export default QueryBtn;
