import React from 'react';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { queries } from 'graphs';
import styled from 'styled-components';
import { COLORS } from 'styles';

const Root = styled.div`
  width: 80vh;
  height: 80vh;
  position: absolute;
  border: 1px solid grey;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.MAIN};
`;

const Modal = ({ children, className }) => {
  const client = useApolloClient();
  const { data } = useQuery(queries.getModalDisplayed);

  return (
    <Root
      className={className}
      style={{display: data.modalDisplayed ? 'flex' : 'none'}}
    >
      <button type="button" onClick={() => client.writeData({ data: { modalDisplayed: false } })}>X</button>
      {children}
    </Root>
  );
};

export default Modal;
