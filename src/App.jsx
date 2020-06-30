import React, { useState } from 'react';
import { AlertsList, SideBarBtn, Modal, RoutesList, SideBar, TicketTypesList } from 'components';
import './App.css';

function App() {
  const [ isModalDisplayed, setIsModalDisplayed ] = useState(false);
  // TODO see if start state '' breaks this
  const [ modalList, setModalList ] = useState('AlertsList');
  const modalLists = {
    AlertsList: <AlertsList />,
    RoutesList: <RoutesList />,
    TicketTypesList: <TicketTypesList />
  };

  const displayAlertsModal = () => {
    setModalList('AlertsList');
    setIsModalDisplayed(true);
  };

  const displayRoutesModal = () => {
    setModalList('RoutesList');
    setIsModalDisplayed(true);
  };

  const displayTicketTypesModal = () => {
    setModalList('TicketTypesList');
    setIsModalDisplayed(true);
  };

  return (
    <div className="App">
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
        {modalLists[modalList]}
      </Modal>
    </div>
  );
}

export default App;
