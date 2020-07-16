import React from 'react';
import { IoMdAlert } from 'react-icons/io';
import styled from 'styled-components';

const Root = styled.li`
  .center-flex-vertically {
    margin: 0.5rem 0;
    display: flex;
    align-items: center;

    svg {
      margin: 0 0.25rem;
    }
  }
  
  .timestamp-container {
    margin: 0.5rem 0;
  }

  .description-container {
    margin: 0.5rem 0;
  }
`

const AlertItem = ({ item }) => {
  let alertColor;
  switch(item.alertSeverityLevel) {
    case 'UNKNOWN_SEVERITY':
      alertColor = 'black';
      break;
    case 'INFO':
      alertColor = 'black';
      break;
    case 'WARNING':
      alertColor = 'orange';
      break;
    case 'SEVERE':
      alertColor = 'red';
      break;
    default:
      alertColor = 'black';
  }

  const convertEpochToHumanTime = (epochTime) => {
    let d = new Date(0);
    d.setUTCSeconds(epochTime);
    return d.toString();
  };

  return (
    <Root>
      {
        item.route?.shortName && item.route?.longName &&
        <p><strong>{item.route?.shortName}, {item.route?.longName}</strong></p>
      }
      <div className="center-flex-vertically">
        <IoMdAlert
          color={alertColor}
        />
        <p>{item.alertEffect} due to {item.alertCause}</p>
      </div>
      <div className="timestamp-container">
        <p>Begins:</p>
        <p><em>{convertEpochToHumanTime(item.effectiveStartDate)}</em></p>
        <p>Approximate End:</p>
        <p><em>{convertEpochToHumanTime(item.effectiveEndDate)}</em></p>
      </div>
      <div className="description-container">
        <p>{item.alertHeaderText}</p>
        <p>{item.alertDescriptionText}</p>
      </div>
    </Root>
  );
}

export default AlertItem;
