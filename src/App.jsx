import React, { useState } from 'react';
import { AlertsList, Footer, Header, Helsinki, Modal, RoutesList, SideBar, SideBarBtn, TicketTypesList } from 'components';
import { FaRoute, FaTicketAlt } from 'react-icons/fa';
import { MdAnnouncement } from 'react-icons/md';
import styled from 'styled-components';
import { COLORS } from 'styles';

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
  }
`;

const StyledFooter = styled(Footer)`
  margin: 20px;
`;

// const StyledHelsinki = styled(Helsinki)`
//   .abs-pos-center-helper {
//     top: 0;
//     width: 100%;
//     position: relative;
//     z-index: 1000;
//     display: flex;
//     justify-content: center;
//   }
// `;

// const StyledHeader = styled(Header)`
//   justify-content: center;
// `;

const StyledHelsinki = styled(Helsinki)`
  .abs-pos-center-helper {
    top: 0;
    width: 100%;
    position: relative;
    z-index: 1000;
    display: flex;
    justify-content: center;
  }
`;

const StyledHeader = styled(Header)`
  top: 0;
  width: 100%;
  position: relative;
  z-index: 1000;
  display: flex;
  justify-content: center;
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
        <StyledHelsinki>
          <div className="abs-pos-center-helper">
            <StyledHeader />
          </div>
        </StyledHelsinki>
        <Modal
          isDisplayed={isModalDisplayed}
        >
          {modalList}
        </Modal>
      </main>
      <StyledFooter />
    </Root>
  );
}

export default App;
