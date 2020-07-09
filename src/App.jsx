import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { AlertsList, Footer, Header, Helsinki, Modal, RoutesList, SideBar, SideBarBtn, TicketTypesList } from 'components';
import { FaRoute, FaTicketAlt } from 'react-icons/fa';
import { MdAnnouncement } from 'react-icons/md';
import styled from 'styled-components';
import { COLORS } from 'styles';
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

function App() {
  const [ modalDisplayed, setModalDisplayed ] = useState(false);
  const [ modalList, setModalList ] = useState('');
  const { data } = useQuery(queries.getRouteMarkers);

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
      {/* <div onClick={() => client.writeData({ data: { markers: [marker] } })}>BUTTON</div>
      <div>#{data.markers[0].lat}#</div>
      <div>#{data.markers[0].lng}#</div>
      <div>#{data.markers[0].icon}#</div> */}

      {/* somehow the cache is updating...! wtF?! */}
      <div onClick={() => console.log(data)}>BUTTON</div>
      {
        data.routeMarkers.map((marker) => <div>{marker.lat}</div>)
      }
      <main>
        <SideBar>
          <SideBarBtn
            handleClick={displayAlertsModal}
            icon={<MdAnnouncement />}
            key={'sidebar-1'}
            text={"Announcements"}
            />
          <SideBarBtn
            handleClick={displayRoutesModal}
            icon={<FaRoute />}
            key={'sidebar-2'}
            text={"Routes"}
            />
          <SideBarBtn
            handleClick={displayTicketTypesModal}
            icon={<FaTicketAlt />}
            key={'sidebar-3'}
            text={"TicketTypes"}
          />
        </SideBar>
        <div className="map-modal-container">
          <HelsinkiSC
            routeMarkers={data.routeMarkers}
          >
            <HeaderSC />
            <FooterSC />
          </HelsinkiSC>
          <ModalSC
            displayed={modalDisplayed}
            setDisplayed={setModalDisplayed}
          >
            {modalList}
          </ModalSC>
        </div>
      </main>
    </Root>
  );
}

export default App;
