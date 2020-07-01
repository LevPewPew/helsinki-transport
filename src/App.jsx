import React, { useState } from 'react';
import { AlertsList, SideBarBtn, Modal, RoutesList, SideBar, TicketTypesList } from 'components';
import styled from 'styled-components';

const Root = styled.div`
  width: 1125px;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

function App() {
  const [ isModalDisplayed, setIsModalDisplayed ] = useState(false);
  const [ modalList, setModalList ] = useState('');

  const displayAlertsModal = () => {
    setModalList(<AlertsList />);
    setIsModalDisplayed(true);
  };

  const displayRoutesModal = () => {
    setModalList(<RoutesList />);
    setIsModalDisplayed(true);
  };

  const displayTicketTypesModal = () => {
    setModalList(<TicketTypesList />);
    setIsModalDisplayed(true);
  };

  return (
    <Root>
      <SideBar>
        <SideBarBtn
          handleClick={displayAlertsModal}
          text={"Announcements"}
          />
        <SideBarBtn
          handleClick={displayRoutesModal}
          text={"Routes"}
          />
        <SideBarBtn
          handleClick={displayTicketTypesModal}
          text={"TicketTypes"}
        />
      </SideBar>
      <Modal
        isDisplayed={isModalDisplayed}
      >
        {modalList}
      </Modal>
    </Root>
  );
}

export default App;
