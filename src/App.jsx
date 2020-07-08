import React, { useState } from 'react';
import { useApolloClient } from "@apollo/react-hooks";
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { AlertsList, Footer, Header, Helsinki, Modal, RoutesList, SideBar, SideBarBtn, TicketTypesList } from 'components';
import { FaRoute, FaTicketAlt } from 'react-icons/fa';
import { MdAnnouncement } from 'react-icons/md';
import styled from 'styled-components';
import { COLORS } from 'styles';

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

function App() {
  const [ modalDisplayed, setModalDisplayed ] = useState(false);
  const [ modalList, setModalList ] = useState('');
  const client = useApolloClient();
  const { data } = useQuery(IS_LOGGED_IN);

  const Root = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${COLORS.MAIN};

    main {
      width: 100%;
      display: flex;
      flex-grow: 2;
      position: relative;

      .map-modal-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  `;

  const HelsinkiSC = styled(Helsinki)`
    position: relative;
  `;

  const FooterSC = styled(Footer)`
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1000;
  `;

  const HeaderSC = styled(Header)`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
  `;

  const ModalSC = styled(Modal)`
    z-index: 2000;
    font-size: 24px;
  `;

  const displayAlertsModal = () => {
    setModalList(<AlertsList />);
    setModalDisplayed(true);
  };

  const displayRoutesModal = () => {
    setModalList(<RoutesList />);
    setModalDisplayed(true);
  };

  const displayTicketTypesModal = () => {
    setModalList(<TicketTypesList />);
    setModalDisplayed(true);
  };

  return (
    <Root>
      <div onClick={() => client.writeData({ data: { isLoggedIn: !data.isLoggedIn } })}>BUTTON</div>
      <div>!{data.isLoggedIn ? "IN": "OUT"}!</div>
      <main>
        <SideBar>
          <SideBarBtn
            handleClick={displayAlertsModal}
            icon={<MdAnnouncement />}
            text={"Announcements"}
          />
          <SideBarBtn
            handleClick={displayRoutesModal}
            icon={<FaRoute />}
            text={"Routes"}
          />
          <SideBarBtn
            handleClick={displayTicketTypesModal}
            icon={<FaTicketAlt />}
            text={"TicketTypes"}
          />
        </SideBar>
        <div className="map-modal-container">
          <HelsinkiSC>
            <HeaderSC />
            <FooterSC />
          </HelsinkiSC>
          <ModalSC
            isDisplayed={modalDisplayed}
          >
            {modalList}
          </ModalSC>
        </div>
      </main>
    </Root>
  );
}

export default App;
