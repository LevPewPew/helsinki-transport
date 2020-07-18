import React from 'react';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { queries } from 'graphs';
import { MdClose } from 'react-icons/md';
import styled from 'styled-components';
import { COLORS, FONT_SIZES } from 'styles';

const Root = styled.div`
  z-index: 2000;
  width: 70%;
  height: 80vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.MAIN};
  -webkit-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);

  .title-button-container {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      margin-left: 2rem;
    }

    button {
      padding: 0.5rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: ${FONT_SIZES.ULTRA};
      color: ${COLORS.TEXT_SECONDARY};
      background-color: transparent;
      outline: 0;
      cursor: pointer;
    }
  }

  .children-container {
    height: 100%;
    padding: 2.5rem 0;
    margin-left: 11px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      -webkit-appearance: none;
      position: absolute;
    }

    &::-webkit-scrollbar:vertical {
      width: 11px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      border: 2px solid ${COLORS.SUBTLE_DETAILS};
      background-color: ${COLORS.POP};
    }
  }
`;

const Modal = ({ children, className, title }) => {
  const client = useApolloClient();
  const { data } = useQuery(queries.getModalDisplayed);

  const handleClose = () => {
    client.writeData({ data: { modalDisplayed: false } })
  };

  return (
    <Root
      className={className}
      style={{display: data.modalDisplayed ? 'flex' : 'none'}}
    >
      <div className="title-button-container">
        <h2>{title}</h2>
        <button type="button" onClick={handleClose}><MdClose /></button>
      </div>
      <div className="children-container">
        {children}
      </div>
    </Root>
  );
};

export default Modal;
