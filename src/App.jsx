import React, { useState } from 'react';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import {
  AlertsList,
  Footer,
  Header,
  Helsinki,
  Modal,
  RoutesList,
  SideBar,
  SideBarBtn,
  StopsList,
  TicketTypesList
} from 'components';
import { FaRoute, FaTicketAlt } from 'react-icons/fa';
import { MdAnnouncement } from 'react-icons/md';
import styled from 'styled-components';
import { COLORS, FONT_SIZES } from 'styles';
import { queries } from 'graphs';

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
    flex-grow: 1;
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

// NOTE on latitude and longitude:
// leaflet map package uses "lat","lng",
// but HSL graphql schema uses "lat", "lon"
function App() {
  const [ modalList, setModalList ] = useState(null);
  const [ modalTitle, setModalTitle ] = useState(null);
  const client = useApolloClient();
  const { data } = useQuery(queries.getRouteStops);

  const displayAlertsModal = () => {
    setModalTitle("Alerts");
    setModalList(<AlertsList />);
    client.writeData({ data: { modalDisplayed: true } })
  };

  const displayRoutesModal = () => {
    setModalTitle("Routes");
    setModalList(<RoutesList />);
    client.writeData({ data: { modalDisplayed: true } })
  };

  const displayTicketTypesModal = () => {
    setModalTitle("Tickets");
    setModalList(<TicketTypesList />);
    client.writeData({ data: { modalDisplayed: true } })
  };

  return (
    <Root>
      <main>
        <SideBar
          list={
            <StopsList
              stops={data.routeStops}
            />
          }
        >
          <SideBarBtn
            handleClick={displayAlertsModal}
            icon={<MdAnnouncement />}
            key={'SideBarBtn-1'}
            text={"Announcements"}
          />
          <SideBarBtn
            handleClick={displayRoutesModal}
            icon={<FaRoute />}
            key={'SideBarBtn-2'}
            text={"Routes"}
          />
          <SideBarBtn
            handleClick={displayTicketTypesModal}
            icon={<FaTicketAlt />}
            key={'SideBarBtn-3'}
            text={"TicketTypes"}
          />
        </SideBar>
        <div className="map-modal-container">
          <HelsinkiSC
            routeStops={data.routeStops}
          >
            <HeaderSC />
            <FooterSC />
          </HelsinkiSC>
          <ModalSC
            title={modalTitle}
          >
            {modalList}
          </ModalSC>
        </div>
      </main>
    </Root>
  );
}

export default App;
