import React from 'react';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { queries } from 'graphs';
import { MdClose } from 'react-icons/md';
import styled from 'styled-components';
import { COLORS, FONT_SIZES } from 'styles';

const Root = styled.div`
  width: 80vh;
  height: 80vh;
  position: absolute;
  border: 1px solid grey;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.MAIN};

  .button-container {
    display: flex;
    position: absolute;
    right: 0;
    top: 0;

    button {
      padding: 0.5rem;
      border: none;
      margin-left: auto;
      font-size: ${FONT_SIZES.ULTRA};
      background-color: transparent;
      outline: 0;
      cursor: pointer;
    }
  }

  .children-container {
    height: 100%;
    padding: 2.5rem;
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
      <div className="button-container">
        <button type="button" onClick={() => client.writeData({ data: { modalDisplayed: false } })}><MdClose /></button>
      </div>
      <div className="children-container">
        {children}
      </div>
    </Root>
  );
};

export default Modal;
