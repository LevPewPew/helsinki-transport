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

  .children-container {
    padding: 2rem;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      -webkit-appearance: none;
    }

    &::-webkit-scrollbar:vertical {
      width: 11px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      border: 2px solid ${COLORS.MAIN};
      background-color: rgba(0, 0, 0, .5);
    }
  }
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
      <div className="children-container">
        {children}
      </div>
    </Root>
  );
};

export default Modal;
